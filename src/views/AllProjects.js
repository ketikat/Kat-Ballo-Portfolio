import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import history from '../history'

require('../styles/gallery.css')

import Grid from '../components/Grid'

class AllProjects extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(link){
		history.push(link)
	}

	render(){
		let allProjectsThumbs = []

		let names = ["aged_man", "anime", "bridge", "vulcan_gun", "knightfall", "knights_armor", "mech_suit", "pilot", "skanderbeg", "skull_sermon", "tunnel", "x-men"]

		for(let i = 0; i < names.length; i++) {
				allProjectsThumbs.push({
							url:`../../images/allprojects/${names[i]}.jpg`,
				      link:`/${names[i]}`
				})
		}
		return (
					<div className="gallery">
						<div >
							<p>text in gallery</p>
							 <Grid
							 clickHandler={this.handleClick}
							 imagesArray={allProjectsThumbs}
							 />
						</div>
					</div>
		)
	}
}

export default AllProjects
