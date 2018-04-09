import React, { Component } from 'react'
import { Route, withRouter, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Home from '../views/Home'
import TopMenu from './TopMenu'
import About from '../views/About'
import Contact from '../views/Contact'
import Work from '../views/Work'
import SingleProject from '../views/SingleProject'
require('../styles/app.css')

function RenderFadeInComponent (Component, props) {
  const title = props.match.params.title

  return (
    <CSSTransition timeout={400} classNames='fade' in={true}>
      <Component props={props} title={title} />
    </CSSTransition>
  )
}

class UserInterface extends Component {
  componentDidMount () {
    document.getElementById('root').className = 'show'
    document.getElementById('loader').className = 'delete'
  }

  render () {
    return (
      <div>
        <TopMenu />
        <TransitionGroup>
          <Switch>
            <Route
              exact
              path='/home'
              component={props => RenderFadeInComponent(Home, props)}
            />

            <Route
              exact
              path='/work'
              component={props => RenderFadeInComponent(Work, props)}
            />

            <Route
              exact
              path='/work/:title'
              component={props => RenderFadeInComponent(SingleProject, props)}
            />

            <Route
              exact
              path='/'
              component={props => RenderFadeInComponent(Home, props)}
            />

            <Route
              exact
              path='/about'
              component={props => RenderFadeInComponent(About, props)}
            />

            <Route
              exact
              path='/contact'
              component={props => RenderFadeInComponent(Contact, props)}
            />
          </Switch>
        </TransitionGroup>
      </div>
    )
  }
}

export default withRouter(UserInterface)
