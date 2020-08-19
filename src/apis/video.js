import axios from "axios";
import URLBASE from "../config";

export const getVideoList = async (search) => {
  let result = await axios({
    method: "GET",
    url: `${URLBASE}/search?key=${process.env.REACT_APP_YOUTUBE}&q=${search}&part=snippet&maxResults=20`,
    headers: {},
  });

  return result;
};

export const getVideoDetails = async (id) => {
  let result = await axios({
    method: "GET",
    url: `${URLBASE}/videos?key=${process.env.REACT_APP_YOUTUBE}&id=${id}&part=snippet`,
    headers: {},
  });

  return result;
};

export const plusVideoList = async (search, token) => {
  let result = await axios({
    method: "GET",
    url: `${URLBASE}/search?key=${process.env.REACT_APP_YOUTUBE}&q=${search}&part=snippet&maxResults=20&pageToken=${token}`,
    headers: {},
  });

  return result;
};
