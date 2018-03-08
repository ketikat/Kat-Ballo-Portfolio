import React, {Component} from 'react'
import {Route, Link, browserHistory, Redirect, withRouter, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import TopMenu from './TopMenu'

import About from '../views/About'
import Contact from '../views/Contact'
import AllProjects from '../views/AllProjects'
import SingleProject from '../views/SingleProject'
require('../styles/app.css')


function RenderFadeInComponent (Component, props) {
  const title = props.match.params.title

  return (
        <CSSTransition timeout={400} classNames="fade" in={true}>
          <Component props={props} title={title} />
        </CSSTransition>
  )
}


class App extends Component {
  componentDidMount() {
      document.getElementById("root").className = "show"
      document.getElementById("loader").className = "delete"
  }

  render() {
    return (
      <div>

          <TopMenu />
          <TransitionGroup>
            <Switch>
              <Route exact path="/" component={(props) => RenderFadeInComponent(AllProjects, props)} />
              <Route exact path="/about" component={(props) => RenderFadeInComponent(About, props)} />
              <Route exact path="/contact" component={(props) => RenderFadeInComponent(Contact, props)} />
              <Route exact path="/:title" component={(props) => RenderFadeInComponent(SingleProject, props )} />
              <Route exact path="/cv" component={ Contact } />
            </Switch>
          </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(App)
