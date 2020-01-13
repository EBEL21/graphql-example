export let movies = [
    {
        id: 0,
        name: "Irish Man",
        score: 86
    },
    {
        id: 1,
        name: "Joker",
        score: 93
    },
    {
        id: 2,
        name: "Parasite",
        score: 88
    },
    {
        id: 3,
        name: "Once Upon a Time in Hollywood",
        score: 79
    }
];

export const getMovies = () => movies;

export const getById = (id) => {
    const filteredmovies = movies.filter(movie => id === movie.id);
    return filteredmovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}