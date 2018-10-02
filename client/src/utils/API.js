import axios from "axios";

export default {
  // Gets all Articles
  getArticles: function() {
    return axios.get("/api/Articles");
  },
  // Gets the Article with the given id
  getArticlebyID: function(id) {
    return axios.get("/api/Articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/Articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(ArticleData) {
    return axios.post("/api/Articles", ArticleData);
  }
};
