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
//
// // Rendering Movies from TMDB Database
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
//
// Call this after appending element to the parent
//
//
// Function to display movies on the page
// export function displayMovies(movies) {
//     movieList.innerHTML = '';
//
//     movies.forEach(movie => {
//         const movieDiv = document.createElement('div');
//         movieDiv.innerHTML = `
//       <h3>${movie.title} (${movie.rating})</h3>
//       <p>Genre: ${movie.genre}</p>
//       <button class="edit-button" data-id="${movie.id}">Edit</button>
//       <button class="delete-button" data-id="${movie.id}">Delete</button>
//     `;
//         movieList.appendChild(movieDiv);
//     });
// }
//
// // Function to add a movie to the database
// export function addMovie(title, rating, genre) {
//     fetch('http://localhost:3000/movies/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title, rating, genre })
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Movie added:', data);
//             displayMovies(data.movies);
//         })
//         .catch(error => {
//             console.error('Error adding movie:', error);
//         });
// }
//
// // Function to remove a movie from the database
// export function removeMovie(id) {
//     fetch(` http://localhost:3000/movies/${id}`, {
//         method: 'DELETE'
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Movie removed:', data);
//             let movies =
//                 displayMovies(data.movies);
//         })
//         .catch(error => {
//             console.error('Error removing movie:', error);
//         });
// }
//
// // Function to update a movie in the database
// export function updateMovie(id, title, rating, genre) {
//     fetch(` http://localhost:3000/movies/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title, rating, genre })
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Movie updated:', data);
//             displayMovies(data.movies);
//         })
//         .catch(error => {
//             console.error('Error updating movie:', error);
//         });
// }
//
// // Fetch the list of movies from the database and display them on the page
// export function displayMovie() {
//     fetch(' http://localhost:3000/movies/')
//         .then(response => response.json())
//         .then(data => {
//             console.log('Movies:', data.movies);
//             displayMovies(data.movies);
//         })
//         .catch(error => {
//             console.error('Error fetching movies:', error);
//         });
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

// Define the searchMovies function to fetch movies by title or genre
// export const searchMovies = async (searchQuery, searchType) => {
//     try {
//         let url;
//         if (searchType === 'title') {
//             url = `http://localhost:3000/movies?title_like=${searchQuery}`;
//         } else if (searchType === 'genre') {
//             url = `http://localhost:3000/movies?genre=${searchQuery}`;
//         }
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log('Movies found:', data);
//         return data;
//     } catch (error) {
//         console.error('Error searching movies:', error);
//     }
// }

let input = document.querySelector('#searchbar')
input.addEventListener('keyup', filter)
function filter() {
    let inputQuery = document.querySelector('#searchbar').value.toLowerCase();
    let filteredCoffees = [];
    coffees.forEach(function (coffee) {
        let name = coffee.name.toLowerCase();
        if (name.includes(inputQuery))  {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

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