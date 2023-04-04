// import {TMDB_API} from "./keys.js"
//
// // Fetches data from TMDB for popular movies on a specific date (today)
// export async function tmdbMovieData  () {
//     try {
//         const response = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`);
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         console.log (error)
//     }
// }
//
// // Pulls only the results, array of movies, from the data above
// export async function getMovieArray () {
//     try {
//         const response = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`);
//         const data = await response.json();
//         return data.results;
//     } catch (error) {
//         return error
//     }
// }

// Rendering Movies from TMDB Database
// export const renderMovie = (movie, parent) => {
//     const element = document.createElement('div');
//     element.classList.add(`movie-card`);
//     element.innerHTML = `
//     <div class="column">
//         <div class="img-wrapper">
//             <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="movie poster" class="moviePoster">
//         </div>
//     </div>
//     <div class="column">
//          <div class="movie-info">
//             <h2>${movie.title}</h2>
//             <p>${movie.overview}</p>
//             <button>Delete Movie</button>
//         </div>
//     </div>
//     `;
//     document.getElementById('movieCard').appendChild(element)
// }




// Function to get all movies from the database
export const getMovies = async () => {
    try {
        const response = await fetch('http://localhost:3000/movies');
        const data = await response.json();
        console.log('Movies:', data);
        return data;
    } catch (error) {
        console.error('Error getting movies:', error);
    }
};

//Function to add a new movie to the database
export const addMovie = async (title, rating, genre) => {
    try {
        const response = await fetch('http://localhost:3000/movies/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, rating, genre })
        });
        const data = await response.json();
        console.log('Movie added:', data);
        return data;
    } catch (error) {
        console.error('Error adding movie:', error);
    }
};

// Function to update an existing movie in the database
export const updateMovie = async (id, title, rating, genre) => {
    try {
        const response = await fetch(`http://localhost:3000/movies/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, rating, genre })
        });
        const data = await response.json();
        console.log('Movie updated:', data);
        return data;
    } catch (error) {
        console.error('Error updating movie:', error);
    }
};

// Function to delete an existing movie from the database
export const deleteMovie = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/movies/${id}`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log('Movie deleted:', data);
        return data;
    } catch (error) {
        console.error('Error deleting movie:', error);
    }
};

//function to search for a movie
export const searchMovies = async (searchText) => {
    try {
        const response = await fetch(`http://localhost:3000/movies?q=${searchText}`);
        const data = await response.json();
        console.log('Movies:', data);
        displayMovies(data);
    } catch (error) {
        console.error('Error searching movies:', error);
    }
};

// Function to display all movies in the HTML page
export const displayMovies = (movies) => {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';
    movies.forEach((movie) => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
      <h2>${movie.title}</h2>
      <p><strong>Rating:</strong> ${movie.rating}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <button class="edit-movie-btn" data-id="${movie.id}">Edit</button>
      <button class="delete-movie-btn" data-id="${movie.id}">Delete</button>`;
        movieList.appendChild(movieItem);
    });
};