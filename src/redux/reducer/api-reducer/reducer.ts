import { sortByChronologyDate, sortByReleaseDate } from "../../../utils/filter-movies"
import { Action } from "./types"

const initialState= {
  character: [],
  movie: [],
  comic: [],
  contentId: {},
}

/**
 * Função reducer para gerenciar os estados das consultas da api
 * @param state
 * @param action
 * @returns  Retorna um novo estado após a execução de um type.
 */

export function apiReducer(state= initialState, action: Action){
  switch(action.type){
    case "GET_CHARACTER_ID":

      return {
        ...state,
        contentId: action.payload,
      }
    case "GET_ALL_CHARACTERS":

      return {
        ...state,
        character: action.payload,
      }

    case "GET_MOVIE_ID":

      return {
        ...state,
        contentId: action.payload,
      }

    case "GET_ALL_MOVIES":
      return {
        ...state,
        movie: action.payload,
      }

    case 'GET_MOVIES_RELEASE':
      return {
        ...state,
        movie: sortByReleaseDate(state.movie),
      }

    case 'GET_MOVIES_CHRONOLOGY':
      return {
        ...state,
        movie: sortByChronologyDate(state.movie),
      }

    case "GET_ALL_COMICS":

      return {
        ...state,
        comic: action.payload,
      }

    case "GET_COMIC_ID":
      return {
        ...state,
        contentId: action.payload,
      }

    default:
      return state
  }
}
