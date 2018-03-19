import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
require('../styles/hamburger.css')

export default class Hamburger extends Component {

	constructor(props){
    super(props)
    this.state = {
    	isProjectsClicked: false,
    	isBurgerClicked: false
    }
     this.projectsClicked = this.projectsClicked.bind(this)
     this.burgerClicked = this.burgerClicked.bind(this)
  }

 	projectsClicked(e){
 		this.setState({isProjectsClicked: !this.state.isProjectsClicked})
 	}

 	burgerClicked(e){
 		this.setState({isBurgerClicked: !this.state.isBurgerClicked})
 	}


  render() {

  	let toggled= this.state.isBurgerClicked? 'toggled' : 'nope'


  	return (
			  <nav>
				  <div id="menuToggle" className={toggled}>

						<div onClick={this.burgerClicked} className={toggled}>
					    <span className="bar1"></span>
					    <span className="bar2"></span>
					    <span className="bar3"></span>
					  </div>

				    	<ul id="menu" className={toggled}>
						    <div>
									<h1 className="hide">Kat Ballo - Software Engineer Portfolio</h1>
								</div>

              <div id="websiteLinks">
                <br/>
								<p onClick={this.burgerClicked}><Link to="/work">work</Link></p>
                 <div id="projectLinks">
                 <br/>
                    <p onClick={this.burgerClicked} className="offsetItem"><Link to="/work/exquisite_graveyard">Exquisite Graveyard</Link></p>
                    <p onClick={this.burgerClicked} className="offsetItem"><Link to="/work/iloveplant">I Love Plant</Link></p>
                    <p onClick={this.burgerClicked} className="offsetItem"><Link to="/work/d-construction">D-Construction</Link></p>
                    <p onClick={this.burgerClicked} className="offsetItem"><Link to="/work/artist_portfolio">Character Artist Portfolio</Link></p>
                  </div>
                  <br/>
								<p onClick={this.burgerClicked}><Link to="/contact" replace >contact</Link></p>
                <br/>
								<p onClick={this.burgerClicked}><Link to="/about" replace>about</Link></p>
              </div>
           </ul>
				  </div>
				</nav>
		)
	}
}



