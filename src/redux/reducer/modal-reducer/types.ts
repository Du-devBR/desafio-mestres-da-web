type OpenModal = {
  payload: {
    id: number
  }
  type: "OPEN"
}

type CloseModal = {
  type: "CLOSE"
}

export type Action = OpenModal | CloseModal
