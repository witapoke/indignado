import React from 'react'
import Form from './Form'
import Cajita from './Cajita'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import QuejaState from './Context/QuejaState'

export default function App() {
  return (
    <QuejaState>
      <Header></Header>
      <Form></Form>
      <Cajita></Cajita>
    </QuejaState>
  )
}
