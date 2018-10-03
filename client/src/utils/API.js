import axios from "axios";

export default {

  getArticles: function() {
    return axios.get("/api/Articles");
  },

  getArticlebyID: function(id) {
    return axios.get("/api/Articles/" + id);
  },

  deleteArticle: function(id) {
    return axios.delete("/api/Articles/" + id);
  },

  saveArticle: function(ArticleData) {
    return axios.post("/api/Articles", ArticleData);
  },
};
