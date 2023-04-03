import {OMDB_API} from "./keys.js"

export async function movieData() {
    try {
        const response = await fetch(`http://www.omdbapi.com/?i=tt0068646&apikey=${OMDB_API}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}