import React, {Component} from 'react'
import {Link, Redirect, withRouter} from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
require('../styles/menu.css')


class TopMenu extends Component {

	constructor(props){
    super(props)
    this.state = {
    	// isProjectsClicked: false
    }
     // this.clicked = this.clicked.bind(this)
  }

 	// clicked(e){
 	// 	this.setState({isProjectsClicked: !this.state.isProjectsClicked})
 	// }

  render() {
  	return (
            <div className="topMenu">
							<p className="menuItem"><Link to="/">Kat Ballo</Link></p>
              <HamburgerMenu />
						</div>
    )
  }
}
export default TopMenu



