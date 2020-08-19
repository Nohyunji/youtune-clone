import React, { useEffect, useState } from "react";
import { formatDate } from "../../utils/date";

// apis;
import { getVideoList } from "../../apis/video";
import { plusVideoList } from "../../apis/video";

import "./View.css";
import BoardList from "../BoardList";

function View(props) {
  const [result, setResult] = useState([]);

  const [pageToken, setPageToken] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await getVideoList();

      try {
        setResult(res.data.items);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const MoreData = () => {
    (async () => {
      let res = await plusVideoList(undefined, pageToken);
      try {
        setResult(result.concat(Array.from(res.data.items)));
        setPageToken(res.data.nextPageToken);
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <div id="View">
      <div className="view-video">
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${encodeURI(
              props.match.params.userId
            )}`}
            title="hi"
          ></iframe>
        </div>
        <div>
          <div className="userTitle">
            <div>{props.match.params.title}</div>
          </div>
          <div className="Btn">
            <div className="useName">
              {formatDate(props.match.params.publishedAt)}
            </div>
            <div title="이 동영상이 마음에 듭니다.">
              <div>
                <img src="/assets/view/like.svg" alt=""></img>
              </div>
              <div>좋아요</div>
            </div>
            <div title="이 동영상이 마음에 들지 않습니다.">
              <div>
                <img src="/assets/view/unlike.svg" alt=""></img>
              </div>
              <div>싫어요</div>
            </div>
            <div title="공유">
              <div>
                <img src="/assets/view/share.svg" alt=""></img>
              </div>
              <div>공유</div>
            </div>
            <div>
              <div>
                <img src="/assets/view/save.svg" alt=""></img>
              </div>
              <div>저장</div>
            </div>
            <div>
              <div>
                <img src="/assets/view/more.svg" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="List-wrap">
        <div>다음 동영상</div>

        <BoardList list={result} fetchMoreData={MoreData} />
      </div>
    </div>
  );
}

export default View;
