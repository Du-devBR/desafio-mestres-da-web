import {  combineReducers, configureStore,  } from "@reduxjs/toolkit";
import { ModalState, modalReducer } from "./reducer/modal-reducer/reducer";
import { CharacterTypes } from "../pages/characters/types";
import { apiReducer } from "./reducer/api-reducer/reducer";
import { RegisterStates, registerReducer } from "./reducer/register-reducer/reducer";
import  {LoginStates, loginReducer}  from "./reducer/login-reducer/reducer";
import { MoviesTypes } from "../pages/movies/types";
import { ComicsTypes } from "../pages/comics/types";
import { ContentModalTypes } from "../componentes/modal/types";

/**
 * Estado Global da aplicação
 */
export type RootState = {
  modal: ModalState,
  api: {
    character: CharacterTypes[]
    contentId: ContentModalTypes
    movie: MoviesTypes[]
    comic: ComicsTypes[]
  },
  register: RegisterStates,
  login: LoginStates

}

/**
 * Combinador de reducers, adiciona ao estado raiz separando por objeto.
 */

const rootReducer = combineReducers({
  modal: modalReducer,
  api: apiReducer,
  register: registerReducer,
  login: loginReducer
})

/**
 * Configuração do store, obtem os reducer os reducers combinados e gera o store central do redux
 */

const store = configureStore({
  reducer: rootReducer,
})

/**
 * useDispatch não é reconhecido seu tipo, então é exportado o type AppDispatch que criara um typeof do storage.
 * Documentação: https://redux.js.org/usage/usage-with-typescript
 */

export type State = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export default store
