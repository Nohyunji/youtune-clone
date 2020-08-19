import React, { useState } from "react";

import "./Board.css";

import {
  List,
  firstList,
  secondList,
  thirdList,
  fourthList,
  fiveList,
} from "../../sampleData";

function Board(props) {
  const [active, setActive] = useState(false);

  const focusShow = (e) => {
    const index = e.currentTarget.dataset.index;

    setActive({ [index]: !active[index] });
  };

  return (
    <div className={props.menu ? "active" : ""}>
      <div id="Board">
        {/* 클릭 전 */}
        <div className={`board-wrap ${props.menu ? "none-active" : ""}`}>
          {List.map((data, i) => {
            return (
              <div
                key={i}
                className={`board-list ${active[data.index] ? "focus" : ""}`}
                data-index={data.index}
                onClick={focusShow}
              >
                <div className="img">
                  <img src={data.img} alt=""></img>
                </div>
                <div>{data.title}</div>
              </div>
            );
          })}
        </div>

        {/* 클릭 후 */}
        <div
          className={`board-click ${props.menu ? "active" : "none-active "}`}
        >
          {firstList.map((data, i) => {
            return (
              <div
                key={i}
                className={`click-list ${active[data.index] ? "focus" : ""}`}
                data-index={data.index}
                onClick={focusShow}
              >
                <div className="img">
                  <img src={data.img} alt=""></img>
                </div>
                <div>{data.title}</div>
              </div>
            );
          })}

          <div className="line"></div>

          {secondList.map((data, i) => {
            return (
              <div
                key={i}
                className={`click-list ${active[data.index] ? "focus" : ""}`}
                data-index={data.index}
                onClick={focusShow}
              >
                <div className="img">
                  <img src={data.img} alt=""></img>
                </div>
                <div>{data.title}</div>
              </div>
            );
          })}

          <div className="line"></div>
          <div className="title">구독</div>

          {thirdList.map((data, i) => {
            return (
              <div
                key={i}
                className={`click-list ${active[data.index] ? "focus" : ""}`}
                data-index={data.index}
                onClick={focusShow}
              >
                <div className="img">
                  <img src={data.img} alt=""></img>
                </div>
                <div>{data.title}</div>
              </div>
            );
          })}

          <div className="line"></div>
          <div className="title">YOUTUBE 더보기</div>

          {fourthList.map((data, i) => {
            return (
              <div
                key={i}
                className={`click-list ${active[data.index] ? "focus" : ""}`}
                data-index={data.index}
                onClick={focusShow}
              >
                <div className="img">
                  <img src={data.img} alt=""></img>
                </div>
                <div>{data.title}</div>
              </div>
            );
          })}

          <div className="line"></div>

          {fiveList.map((data, i) => {
            return (
              <div
                key={i}
                className={`click-list ${active[data.index] ? "focus" : ""}`}
                data-index={data.index}
                onClick={focusShow}
              >
                <div className="img">
                  <img src={data.img} alt=""></img>
                </div>
                <div>{data.title}</div>
              </div>
            );
          })}

          <div className="line"></div>

          <div className="infor">
            <div>
              <div>정보</div>
              <div>프레스</div>
              <div>저작권</div>
              <div>문의하기</div>
              <div>크리에이터</div>
              <div>광고</div>
              <div>개발자</div>
            </div>

            <div>
              <div>이용약관</div>
              <div>개인정보 보호</div>
              <div>정책 및 안전</div>
              <div>YouTube 작동의 원리</div>
              <div>새로운 기능 테스트하기</div>
            </div>

            <div className="detail">
              <div>© 2020 Google LLC</div>
              <div> 회사명: Google LLC</div>
              <div>CEO: Sundar Pichai </div>
              <div>
                주소: 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
              </div>
              <div>전화: 080-822-1450 (무료)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
