import * as movieMain from "./movie-project-functions.js";
import {displayMovies} from "./movie-project-functions.js";
import {addMovie} from "./movie-project-functions.js";
import {removeMovie} from "./movie-project-functions.js";
import {updateMovie} from "./movie-project-functions.js";
import {displayMovie} from "./movie-project-functions.js";

(async () => {
    // Pulls an array of movies, with each being objects, from  the TMDB Database;
    let tmdbMovieData = await movieMain.tmdbMovieData();
    console.log(tmdbMovieData)

})();
const movieList = document.getElementById('movie-list');
const addMovieForm = document.getElementById('add-movie-form');

displayMovies(movies)
// Add an event listener to the form to add a new movie
addMovieForm.addEventListener('submit', event => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const rating = document.getElementById('rating').value;
    const genre = document.getElementById('genre').value;

    addMovie(title, rating, genre);

    addMovieForm.reset();
});

// Add event listeners to the movie list for editing and deleting movies
movieList.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('edit-button')) {
        const id = target.dataset.id;
        const title = prompt('Enter the new title:');
        const rating = prompt('Enter the new rating:');
        const genre = prompt('Enter the new genre:');
        updateMovie(id, title, rating, genre);
    } else if (target.classList.contains('delete-button')) {
        const id = target.dataset.id;
        const confirmDelete = confirm('Are you sure you want to delete this movie?');
        if (confirmDelete) {
            removeMovie(id);
        }
    }
});

displayMovie()