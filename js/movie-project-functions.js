// Function to get all movies from the database
export const getMovies = async () => {
    try {
        const response = await fetch('http://localhost:3000/movies');
        const data = await response.json();
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
        return data;
    } catch (error) {
        console.error('Error deleting movie:', error);
    }
};

