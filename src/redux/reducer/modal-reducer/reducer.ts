import { Action } from "./types"

export interface ModalState {
  id: number | null
  isOpen: boolean
}

const initialState: ModalState = {
  id: null,
  isOpen: false
}

/**
 * Função reducer para gerenciar o estado do modal
 * @param state
 * @param action
 * @returns  Retorna um nov estado após a execução de um type.
 */
export function modalReducer(state= initialState, action: Action){
  switch(action.type){
    case "OPEN":
      return {
        ...state,
        isOpen: true,
      }
    case "CLOSE":
      return {
        ...state,
        isOpen: false
      }
    default:
      return state
  }
}
