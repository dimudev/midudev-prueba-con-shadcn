import reponseMovies from "../mocks/with-result.json";
// import noResult from "../mocks/no-result.json";

export  function useMovies() {
  const movies = reponseMovies.Search
  const moviesMapped = movies.map(movie => {
    return {  
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster
    }
  })
  return {movies: moviesMapped}
}
