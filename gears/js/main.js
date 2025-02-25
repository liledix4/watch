import { queryString } from "../modules/js_url/url.min.js";


console.log(await queryString().then(queryStringObject => {
  if (queryStringObject.v) {
    const video = queryStringObject.v;
    if ( video.match(/^[0-9A-Za-z_\-]{11}$/).length <= 0 )
      return;
    document.querySelector('body').innerHTML = `<iframe src="https://www.youtube.com/embed/${video}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }
}));