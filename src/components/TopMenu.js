import React, {Component} from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
require('../styles/menu.css')


class TopMenu extends Component {

	constructor(props){
    super(props)

  }

  render() {
  	return (
            <div className="topMenu">
							<p  className="menuItem"><Link to="/">Kat Ballo</Link><i className="fa fa-hand-peace-o" aria-hidden="true"></i></p>
              <HamburgerMenu />
						</div>
    )
  }
}
export default TopMenu



