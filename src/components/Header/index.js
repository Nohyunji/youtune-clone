import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import "./Header.css";

function Header(props) {
  const [form, setForm] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: localStorage.getItem("name"),
      login: localStorage.getItem("accessToken") ? true : false,
    }
  );

  const responseGoogle = (response) => {
    console.log("login Success", response);
    localStorage.setItem("accessToken", response.accessToken);
    localStorage.setItem("name", response.profileObj.givenName);
    setForm({
      name: response.profileObj.givenName,
      login: true,
    });
  };

  const responseFail = (response) => {
    console.log("login Fail", response);
  };

  return (
    <header className="App-header">
      <div id="Header">
        <div className="header-wrap">
          <div className="header-logo">
            <div onClick={() => props.setMenu(!props.menu)}>
              <img src="/assets/header/menu.svg" alt=""></img>
            </div>

            <Link to="/">
              <div>
                <img src="/assets/header/youtube.svg" alt=""></img>
              </div>
            </Link>
          </div>

          <div className="header-search">
            <div>
              <input
                type="text"
                placeholder="검색"
                onChange={props.searchChange}
              ></input>
            </div>

            <div onClick={props.searchBtn}>
              <img src="/assets/header/search.svg" alt=""></img>
            </div>
          </div>

          <div className="header-menu">
            <div>
              <img src="/assets/header/movies.svg" alt=""></img>
            </div>

            <div>
              <img src="/assets/header/viewmore.svg" alt=""></img>
            </div>

            <div>
              {form.login ? (
                <img src="/assets/header/bell.svg" alt=""></img>
              ) : (
                <img src="/assets/header/more.svg" alt=""></img>
              )}
            </div>

            <div className={form.login ? "useName" : "none"}>{form.name}</div>
          </div>

          <div className={form.login ? "login-success" : ""}>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseFail}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => {
                return (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    로그인
                  </button>
                );
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
