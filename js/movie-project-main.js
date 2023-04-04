import * as movieMain from "./movie-project-functions.js";

(async () => {
    // Pulls an array of movies, with each being objects, from  the TMDB Database;
    let tmdbMovieData = await movieMain.tmdbMovieData();
    console.log(tmdbMovieData)
    let moviesArray = await movieMain.getMovieArray();
    console.log(moviesArray)
    const movieGrid = document.querySelector('#movieGrid')
    moviesArray.forEach(function(movie){
        movieMain.renderMovie(movie, movieGrid);
    });
})();
const movieList = document.getElementById('movie-list');
const addMovieForm = document.getElementById('add-movie-form');

movieMain.displayMovies(movies)
// Add an event listener to the form to add a new movie
addMovieForm.addEventListener('submit', event => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const rating = document.getElementById('rating').value;
    const genre = document.getElementById('genre').value;

    movieMain.addMovie(title, rating, genre);

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
        movieMain.updateMovie(id, title, rating, genre);
    } else if (target.classList.contains('delete-button')) {
        const id = target.dataset.id;
        const confirmDelete = confirm('Are you sure you want to delete this movie?');
        if (confirmDelete) {
            movieMain.removeMovie(id);
        }
    }
});

movieMain.displayMovie()