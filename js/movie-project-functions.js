import {OMDB_API, TMDB_API} from "./keys.js"

// Pull movie data from API for one particular movie
// export async function movieData() {
//     try {
//         const response = await fetch(`http://www.omdbapi.com/?i=tt0068646&apikey=${OMDB_API}`);
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         console.log(error);
//     }
// }


export async function tmdbMovieData  () {
    try {
        const response = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log (error)
    }
}


