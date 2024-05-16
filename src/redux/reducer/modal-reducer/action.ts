/**
 * Action para realizar a abertura do modal
 * @returns objeto para a action com o type
 */
export const openModal = () => ({
  type: "OPEN",
})

/**
 * Action para realizar o fechamento do modal
 * @returns objeto para a action com o type
 */
export const closeModal = () => ({
  type: "CLOSE"
})
