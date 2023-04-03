
export const renderMovie = (movie, parent) => {
    const element = document.createElement('div');
    element.classList.add(`movie-card`);
    element.innerText = `
    <div class="img-wrapper">
        <img src="${movie.poster_path}" alt="movie poster" class="moviePoster">
    </div>
    <h2>${movie.title}</h2>
    <p>${movie.overview}</p>
    <button>Delete Movie</button>
    `;
    element.querySelector(`button`).addEventListener(`click`,function() {
        element.remove();
    });
    parent.appendChild(element)
}