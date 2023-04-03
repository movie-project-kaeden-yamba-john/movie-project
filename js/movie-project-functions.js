import {TMDB_API} from "./keys.js"

// Fetches data from TMDB for popular movies on a specific date (today)
export async function tmdbMovieData  () {
    try {
        const response = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log (error)
    }
}

// Pulls only the results, array of movies, from the data above
export async function getMovieArray () {
    try {
        const response = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API}&language=en-US&page=1`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        return error
    }
}

// Function to display movies on the page
export function displayMovies(movies) {
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `
      <h3>${movie.title} (${movie.rating})</h3>
      <p>Genre: ${movie.genre}</p>
      <button class="edit-button" data-id="${movie.id}">Edit</button>
      <button class="delete-button" data-id="${movie.id}">Delete</button>
    `;
        movieList.appendChild(movieDiv);
    });
}

// Function to add a movie to the database
export function addMovie(title, rating, genre) {
    fetch('http://localhost:3000/movies/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, rating, genre })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie added:', data);
            displayMovies(data.movies);
        })
        .catch(error => {
            console.error('Error adding movie:', error);
        });
}

// Function to remove a movie from the database
export function removeMovie(id) {
    fetch(` http://localhost:3000/movies/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie removed:', data);
            let movies =
                displayMovies(data.movies);
        })
        .catch(error => {
            console.error('Error removing movie:', error);
        });
}

// Function to update a movie in the database
export function updateMovie(id, title, rating, genre) {
    fetch(` http://localhost:3000/movies/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, rating, genre })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Movie updated:', data);
            displayMovies(data.movies);
        })
        .catch(error => {
            console.error('Error updating movie:', error);
        });
}

// Fetch the list of movies from the database and display them on the page
export function displayMovie() {
    fetch('./db.json')
        .then(response => response.json())
        .then(data => {
            console.log('Movies:', data.movies);
            displayMovies(data.movies);
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
}
