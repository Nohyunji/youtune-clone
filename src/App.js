import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

// apis
import { getVideoList } from "./apis/video";
import { plusVideoList } from "./apis/video";

// component
import Header from "./components/Header";
import Board from "./components/Board";
import BoardList from "./components/BoardList";
import View from "./components/View";

import "./App.css";

function App() {
  const [menu, setMenu] = useState(false);

  const [searchInput, setSearchIntut] = useState("");

  const [list, setList] = useState([]);

  const [page, setPage] = useState("");

  // input change
  const searchChange = (e) => {
    setSearchIntut(e.target.value);
  };

  // input result click btn
  const searchBtn = () => {
    if (searchInput !== undefined) {
      (async () => {
        let res = await getVideoList(searchInput);

        try {
          setList(res.data.items);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  };

  // search List
  useEffect(() => {
    (async () => {
      let res = await getVideoList(searchInput);
      try {
        setList(res.data.items);
        setPage(res.data.nextPageToken);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // more view scroll
  const fetchMoreData = () => {
    (async () => {
      let res = await plusVideoList(searchInput, page);
      try {
        setList(list.concat(Array.from(res.data.items)));
        setPage(res.data.nextPageToken);
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <div className="App">
      <Header
        menu={menu}
        setMenu={setMenu}
        searchChange={searchChange}
        searchBtn={searchBtn}
      />

      <div className="App-board">
        <Board menu={menu} />
        <div>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <BoardList
                  menu={menu}
                  setMenu={setMenu}
                  list={list}
                  searchInput={searchInput}
                  fetchMoreData={fetchMoreData}
                />
              );
            }}
          />
          <Route
            exact
            path="/View/:userId/:title/:publishedAt"
            component={View}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
