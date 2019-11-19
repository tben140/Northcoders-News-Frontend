import axios from "axios";

export const getAllArticles = () => {
  return axios.get("https://bt-nc-news.herokuapp.com/api/articles/");
};
