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