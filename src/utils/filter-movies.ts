import { MoviesTypes } from "../pages/movies/types";

/**
 * Ordena os filmes por data de lançamento, do mais recente ao mais antigo.
 * Metodo slice está copiando o array e ordenado a partir do metodo sort que ordena pela 'release_date'
 * @param {MoviesTypes[]} movies - Array de filmes a serem ordenados.
 * @returns {MoviesTypes[]} - Array de filmes ordenados por data de lançamento, do mais novo para o mais antigo.
 */
export function sortByReleaseDate(movies: MoviesTypes[]) {
  return movies.slice().sort((movieA: MoviesTypes, movieB: MoviesTypes) => {
    const dateMovieA = movieA.release_date ? new Date(movieA.release_date).getTime() : 0;
    const dateMovieB = movieB.release_date ? new Date(movieB.release_date).getTime(): 0;
    return dateMovieB - dateMovieA;
  });
}

/**
 * Ordena os filmes por data de lançamento, do mais antigo ao mais recente.
 * Metodo slice está copiando o array e ordenado a partir do metodo sort que ordena pela 'release_date'
 * @param {MoviesTypes[]} movies - Array de filmes a serem ordenados.
 * @returns {MoviesTypes[]} - Array de filmes ordenados por data de lançamento
 */

export function sortByChronologyDate(movies: MoviesTypes[]) {
  return movies.slice().sort((movieA: MoviesTypes, movieB: MoviesTypes) => {
    const dateMovieA = movieA.release_date ? new Date(movieA.release_date).getTime() : 0;
    const dateMovieB = movieB.release_date ? new Date(movieB.release_date).getTime(): 0;
    return dateMovieA - dateMovieB;
  });
}
