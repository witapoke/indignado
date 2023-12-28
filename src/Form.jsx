import React, { useContext } from 'react'
import QuejaContext from './Context/QuejaContext'

export default function Form() {
  const { handleInpChange, texto } = useContext(QuejaContext)
  return (
    <div>
      <form>
        <label htmlFor='queja'>Ingrese su queja aqui</label>
        <input type='text' onChange={handleInpChange} />
        <button>Generar queja</button>
      </form>
      {texto}
    </div>
  )
}
