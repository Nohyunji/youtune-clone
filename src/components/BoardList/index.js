import React from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { formatDate } from "../../utils/date";

import "./BoardList.css";

function BoardList(props) {
  return (
    <div id="BoardList">
      <InfiniteScroll
        className={props.menu ? "menuActive" : ""}
        dataLength={props.list.length}
        next={props.fetchMoreData}
        hasMore={true}
      >
        {props.list.map((data, i) => {
          return (
            <div key={i} className={"boardList-wrap"}>
              <Link
                to={`/view/${data.id.videoId}/${data.snippet.title}/${data.snippet.publishedAt}`}
              >
                <div>
                  <img src={data.snippet.thumbnails.medium.url} alt="" />
                </div>
              </Link>
              <div className="boardList-list">
                <div>img</div>
                <div>
                  <div>{data.snippet.title}</div>
                  <div>{data.snippet.channelTitle}</div>
                  <div>viewscore/{formatDate(data.snippet.publishTime)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
}

export default BoardList;
