import React from 'react'
import { Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import UserInterface from './components/UserInterface.js'
import history from './history'

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <UserInterface />
  </Router>
  ,
  document.getElementById('root')
)
