import React, {Component} from 'react'
import history from '../history'

require('../styles/gallery.css')

import Grid from '../components/Grid'

class Work extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick (link){
		history.push(link)
	}

	render(){
		let allProjectsThumbs = []

		let names = ['iloveplant', 'artist_portfolio', 'exquisite_graveyard', 'd-construction']

		for(let i = 0; i < names.length; i++) {
				allProjectsThumbs.push({
							url: `../../images/allProj/${names[i]}.png`,
				      link: `work/${names[i]}`
				})
		}

		return (
					<div className="gallery">
						<div >
							<p>text in gallery</p>
							 <Grid
							 	paddingBottom="30%"
								imgFitting="contain"
								columns={[1,1,1]}
							 	clickHandler={this.handleClick}
							 	imagesArray={allProjectsThumbs}
							 />
						</div>
					</div>
		)
	}
}

export default Work
