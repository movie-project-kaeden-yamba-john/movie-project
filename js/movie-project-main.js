import * as movieMain from "./movie-project-functions.js";

(async () => {
    // Pulls One Particular Movie from the Movie Database;
    // let movieData = await movieMain.movieData();
    // console.log(movieData)
    // Pulls an array of movies, with each being objects, from  the TMDB Database;
    let tmdbMovieData = await movieMain.tmdbMovieData();
    console.log(tmdbMovieData)

})();