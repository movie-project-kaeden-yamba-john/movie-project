import * as movieMain from "./movie-project-functions.js";

(async () => {
    let movieData = await movieMain.movieData();
    console.log(movieData)

})();