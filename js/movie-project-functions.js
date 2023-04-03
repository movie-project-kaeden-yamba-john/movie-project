import {OMDB_API} from "./keys.js"

export async function movieData() {
    try {
        omdb.accessToken = OMDB_API;
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${omdb.accessToken}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}