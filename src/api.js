import axios from "axios";

export const getArticles = topic => {
  return axios.get("https://bt-nc-news.herokuapp.com/api/articles", {
    params: { topic: topic }
  });
};

export const getAllTopics = () => {
  return axios.get("https://bt-nc-news.herokuapp.com/api/topics");
};

export const getUserData = username => {
  return axios.get(`https://bt-nc-news.herokuapp.com/api/users/${username}`);
};

export const getArticleDetails = article_id => {
  return axios.get(
    `https://bt-nc-news.herokuapp.com/api/articles/${article_id}`
  );
};

export const getCommentsByArticleId = article_id => {
  return axios.get(
    `https://bt-nc-news.herokuapp.com/api/articles/${article_id}/comments`
  );
};

export const postCommentToArticle = (username, body, article_id) => {
  return axios.post(
    `https://bt-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
    { username: username, body: body }
  );
};

export const deleteComment = comment_id => {
  return axios.delete(
    `https://bt-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
};
