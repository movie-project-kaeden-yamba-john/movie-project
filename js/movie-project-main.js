import * as movieMain from "./movie-project-functions";

(async () => {
    let movieData = await movieMain.movieData();
    console.log(movieData)

})();