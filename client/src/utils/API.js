import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const queryParams = {
  "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931"
};
queryParams.q = $("#search-term")
  .val()
  .trim();
const startYear = $("#start-year")
  .val()
  .trim();
if (parseInt(startYear)) {
  queryParams.begin_date = startYear + "0101";
}

const endYear = $("#end-year")
  .val()
  .trim();
if (parseInt(endYear)) {
  queryParams.end_date = endYear + "0101";
}

export default {
  search: function (query) {
    return axios.get(BASEURL + $.param(query));
  }
};