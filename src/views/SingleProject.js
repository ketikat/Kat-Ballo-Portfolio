import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Grid from '../components/Grid.js'

require('../styles/singleproject.css')

export default class SingleProject extends Component {
	constructor(props){
		super(props)
		this.state = {
			ligthboxIsOpen: false,
			currentImage: 1,
			projectName: ""
		}


	}


	render() {

		const folder = this.props.title

		let projectThumbs = []
		let lightboxImages = []

		// for thums for GRID
		for(let i = 1; i < 6; i++) {
			projectThumbs.push( {url:`../../images/${folder}/thumbs/${folder}${i}.jpg`} )
		}


		return (

			<div className="gallery">

				<div >
					<p>text in gallery</p>
					<Grid
						paddingBottom="40%"
						imgFitting="cover"
						columns={[1,1,1]}
						imagesArray={projectThumbs}
					/>
				</div>

			</div>

		)
	}
}
