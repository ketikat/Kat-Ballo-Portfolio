import React from 'react'
import { Router, Route, browserHistory } from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './components/App.js'
import history from './history'

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <App />
  </Router>
  ,
  document.getElementById('root')
)
