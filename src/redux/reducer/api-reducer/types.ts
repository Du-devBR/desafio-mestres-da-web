import { CharacterTypes } from "../../../pages/characters/types"
import { ComicsTypes } from "../../../pages/comics/types"
import { MoviesTypes } from "../../../pages/movies/types"


type GetCharacterIdApi = {
  payload: CharacterTypes
  type: "GET_CHARACTER_ID"
}

type GetAllCharacterApi = {
  payload: CharacterTypes
  type: "GET_ALL_CHARACTERS"
}

type GetAllMoviesrApi = {
  payload: MoviesTypes
  type: "GET_ALL_MOVIES"
}

type GetMovieIdApi = {
  payload: MoviesTypes
  type: "GET_MOVIE_ID"
}

type GetMoviesByReleaseApi = {
  payload: MoviesTypes
  type: "GET_MOVIES_RELEASE"
}

type GetMoviesBychronologyApi = {
  payload: MoviesTypes
  type: "GET_MOVIES_CHRONOLOGY"
}

type GetComicIdApi = {
  payload: ComicsTypes
  type: "GET_COMIC_ID"
}

type GetAllComicsApi = {
  payload: ComicsTypes
  type: "GET_ALL_COMICS"
}

export type Action =
  GetCharacterIdApi |
  GetMovieIdApi | GetComicIdApi |
  GetAllCharacterApi |
  GetAllMoviesrApi |
  GetAllComicsApi |
  GetMoviesByReleaseApi |
  GetMoviesBychronologyApi
