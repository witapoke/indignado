import { HANDLE_INP_CHANGE } from './types'

export default (state, action) => {
  const { type, payload } = action

  switch (type) {
    case HANDLE_INP_CHANGE:
      return {
        ...state,
        texto: payload
      }
    default:
      return state
  }
}
