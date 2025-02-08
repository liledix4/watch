import { queryString } from "../modules/js_url/url.min.js";


console.log(await queryString().then(queryStringObject => {
  if (queryStringObject.v) {
    return queryStringObject.v;
  }
}));