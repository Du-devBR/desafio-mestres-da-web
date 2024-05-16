import { Dispatch } from "@reduxjs/toolkit"
import { CharacterTypes } from "../../../pages/characters/types";
import { MoviesTypes } from "../../../pages/movies/types";
import { ComicsTypes } from "../../../pages/comics/types";

/**
 * Action para  obter um personagem pelo ID, será chamado junto a função fetchCharacterId
 * @param {CharacterTypes} payload
 * @returns {Object}
 */
export const getCharacterId = (payload: CharacterTypes) => {
  return {
    type: "GET_CHARACTER_ID",
    payload,
  };
};

/**
 * Action para  obter todos os personagens, será chamado junto a função fetchAllCharacters
 * @param {CharacterTypes} payload
 * @returns {Object}
 */
export const getAllCharacter = (payload: CharacterTypes) => {
  return {
    type: "GET_ALL_CHARACTERS",
    payload,
  };
};

/**
 * Action para  obter um filme pelo ID, será chamado junto a função fetchMovieId
 * @param {MoviesTypes} payload
 * @returns {Object}
 */
export const getMovieId = (payload: MoviesTypes) => {
  return {
    type: "GET_MOVIE_ID",
    payload,
  };
};

/**
 * Action para  obter todos os filmes, será chamado junto a função fetchAllMovies
 * @param {MoviesTypes} payload
 * @returns {Object}
 */
export const getAllMovies = (payload: MoviesTypes) => {
  return {
    type: "GET_ALL_MOVIES",
    payload,
  };
};

/**
 * Action para filtrar os filmes com base na ordeem da data de lançamento.
 * @returns {Object}
 */
export const getMoviesByReleaseDate = () => {
  return {
    type: "GET_MOVIES_RELEASE",
  };
};

/**
 * Action para filtrar os filmes com base na ordeem cronologica.
 * @returns {Object}
 */
export const getMoviesByChronologyDate = () => {
  return {
    type: "GET_MOVIES_CHRONOLOGY",
  };
};

/**
 * Action para  obter todas as HQ's, será chamado junto a função fetchAllComic
 * @param {ComicsTypes} payload
 * @returns {Object}
 */
export const getAllComics = (payload: ComicsTypes) => {
  return {
    type: "GET_ALL_COMICS",
    payload,
  };
};

/**
 * Action para  obter uma HQ pelo ID, será chamado junto a função fetchComicId
 * @param {ComicsTypes} payload - Os dados do personagem.
 * @returns {Object}
 */
export const getComicId = (payload: ComicsTypes) => {
  return {
    type: "GET_COMIC_ID",
    payload,
  };
};

/**
 * Função fetch async para obter dados da api com base no id do personagem.
 * @param {number}id - Id do personagem
 * @returns Função de thunk do redux
 */
export const fetchCharacterId = (id:number) => {
  return async(dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3000/characters/${id}`)
    const data = await response.json()
    dispatch(getCharacterId(data))
  }
}
/**
 * Função fetch async para obter todos os personagens da api.
 * @returns Função de thunk do redux
 */
export const fetchAllCharacters= () => {
  return async(dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3000/characters`)
    const data = await response.json()

    dispatch(getAllCharacter(data))
  }
}
/**
 * Função fetch async para obter dados da api com base no id do filme.
 * @param {number}id - Id do filme
 * @returns Função de thunk do redux
 */
export const fetchMovieId = (id:number) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3000/movies/${id}`);
    const data = await response.json();
    dispatch(getMovieId(data));
  };
}

/**
 * Função fetch async para obter todos os filmes da api.
 * @returns Função de thunk do redux
 */
export const fetchAllMovies= () => {
  return async(dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3000/movies`)
    const data = await response.json()
    dispatch(getAllMovies(data))
  }
}

/**
 * Função fetch async para ordenar os filmes pela data delançamento. Filtro é feito pela função 'sortByReleaseDate', consultar pasta utils/filter-movies.ts
 * @returns Função de thunk do redux
 */
export const fetchMoviesByReleaseDate= () => {
    return async(dispatch: Dispatch) => {
    dispatch(getMoviesByReleaseDate());
  }
}

/**
 * Função fetch async para ordenar os filmes pela ordem cronologica . Filtro é feito pela função 'sortByChronologyDate', consultar pasta utils/filter-movies.ts
 * @returns Função de thunk do redux
 */
export const fetchMoviesByChronologyDate= () => {
  return async(dispatch: Dispatch) => {
    dispatch(getMoviesByChronologyDate());
  }
}

/**
 * Função fetch async para obter todos as HQs da api.
 * @returns Função de thunk do redux
 */
export const fetchAllComics= () => {
  return async(dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3000/comics`)
    const data = await response.json()

    dispatch(getAllComics(data))
  }
}

/**
 * Função fetch async para obter dados da api com base no id da HQ.
 * @param {number}id - Id da HQ
 * @returns Função de thunk do redux
 */
export const fetchComicId = (id:number) => {
  return async(dispatch: Dispatch) => {
    const response = await fetch(`http://localhost:3000/comics/${id}`)
    const data = await response.json()

    dispatch(getComicId(data))
  }
}
