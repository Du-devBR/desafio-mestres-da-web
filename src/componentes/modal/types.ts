import { CharacterTypes } from "../../pages/characters/types"
import { ComicsTypes } from "../../pages/comics/types"
import { MoviesTypes } from "../../pages/movies/types"

export interface ContentModalTypes extends MoviesTypes, CharacterTypes, ComicsTypes {
  id: number
  title: string
  description?: string
  thumbnail: string
  stars?: number
  release_date?: string
}
