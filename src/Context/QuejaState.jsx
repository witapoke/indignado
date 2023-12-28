import React, { useReducer } from 'react'
import QuejaReducer from './QuejaReducer'
import QuejaContext from './QuejaContext'
export default function QuejaState({ children }) {
  const initialState = {
    texto: ''
  }

  const [state, dispatch] = useReducer(QuejaReducer, initialState)

  function handleInpChange(e) {
    const value = e.target.value
    dispatch({
      type: 'HANDLE_INP_CHANGE',
      payload: value
    })
  }

  return (
    <QuejaContext.Provider
      value={{
        handleInpChange,
        texto: state.texto
      }}
    >
      {children}
    </QuejaContext.Provider>
  )
}
