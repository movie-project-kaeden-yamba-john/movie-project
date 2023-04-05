import { getMovies, addMovie, updateMovie, deleteMovie, searchMovies } from './movie-project-functions.js';
const movieList = document.querySelector('#movie-list');
const addMovieForm = document.querySelector('#add-movie-form');
const searchForm = document.querySelector('#search-form');

// Function to display movies in the movie list
const displayMovies = (movies) => {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
      <h3>${movie.title}</h3>
      <p>Rating: ${movie.rating}</p>
      <p>Genre: ${movie.genre}</p>
      <button class="delete-button" data-id="${movie.id}">Delete</button>
      <button class="edit-button" data-id="${movie.id}">Edit</button>
    `;
        movieList.appendChild(movieElement);
    });
}

// Function to handle adding a new movie
const handleAddMovie = async (event) => {
    event.preventDefault();
    const title = addMovieForm.elements.title.value;
    const rating = addMovieForm.elements.rating.value;
    const genre = addMovieForm.elements.genre.value;
    await addMovie(title, rating, genre);
    addMovieForm.reset();
    const movies = await getMovies();
    displayMovies(movies);
}

// Function to handle updating a movie
const handleUpdateMovie = async (event) => {
    const movieId = event.target.dataset.id;
    const title = prompt('Enter new movie title:');
    const rating = prompt('Enter new movie rating:');
    const genre = prompt('Enter new movie genre:');
    await updateMovie(movieId, title, rating, genre);
    const movies = await getMovies();
    displayMovies(movies);
}

// Function to handle deleting a movie
const handleDeleteMovie = async (event) => {
    const movieId = event.target.dataset.id;
    const confirmation = confirm('Are you sure you want to delete this movie?');
    if (confirmation) {
        await deleteMovie(movieId);
        const movies = await getMovies();
        displayMovies(movies);
    }
}
//Function to handle search a movie
const handleSearchMovies = async (event) => {
    event.preventDefault();
    const searchQuery = searchForm.elements.search.value;
    const searchType = searchForm.elements.searchType.value;
    const movies = await searchMovies(searchQuery, searchType);
    displayMovies(movies);
}


// Add event listeners
addMovieForm.addEventListener('submit', handleAddMovie);
movieList.addEventListener('click', event => {
    if (event.target.classList.contains('edit-button')) {
        handleUpdateMovie(event);
    } else if (event.target.classList.contains('delete-button')) {
        handleDeleteMovie(event);
    }
});

// Display all movies on page load
(async () => {
    const movies = await getMovies();
    displayMovies(movies);

})();

