import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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

								<p onClick={this.projectsClicked}><Link to="/">projects</Link></p>
									{
										this.state.isProjectsClicked
										?
										(<div>
											<p onClick={this.burgerClicked} className="offsetItem"><Link to="exquisite_graveyard">Exquisite Graveyard</Link></p>
											<p onClick={this.burgerClicked} className="offsetItem"><Link to="iLovePlant">I Love Plant</Link></p>
											<p onClick={this.burgerClicked} className="offsetItem"><Link to="D-Construction">D-Construction</Link></p>
											<p onClick={this.burgerClicked} className="offsetItem"><Link to="character_Artist_Portfolio">Character Artist Portfolio</Link></p>
											<p onClick={this.burgerClicked} className="offsetItem"><Link to="/">Kat Ballo</Link></p>
										</div>)
										:
										null
									}
								<p onClick={this.burgerClicked}><Link to="contact">contact</Link></p>
								<p onClick={this.burgerClicked}><Link to="about">about</Link></p>

				    	</ul>
				  </div>
				</nav>
		)
	}
}
