import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Carousel from '../components/Carousel.js'

require('../styles/singleproject.css')

export default class SingleProject extends Component {
	constructor(props){
		super(props)
		this.state = {
			projectName: "",
 			mobileImageNum: 0,
 			desktopImageNum: 0
    }
	}

	 componentDidMount(){
		const title = this.props.title
		let projectName, mobileImageNum, desktopImageNum, text

		switch (title) {
				case 'iloveplant':
				  	desktopImageNum= 1,
				 		mobileImageNum= 4,
				 		projectName='I Love Plant'
						text = (
							<span>
									<p>
								An e-commerce plant store selling...plants! Includes client as well as Admin site.
								<br/>
								<br/>
								Built as part of a four person team of developers in a one week sprint with Node.js, Express.js, Sequelize, React-Redux, Heroku, Bootstrap, Mocha, and Chai.
								</p>
		      		</span>
		      	)
					break

				case 'artist_portfolio':
				 		desktopImageNum=3,
				 		mobileImageNum=4,
				 		projectName='Artist Portfolio'
						text = (
							<span>
									<p>
								A porfolio webstite to showcase the work of a 3D character artist.
								<br/>
								<br/>
								Built with Node.js, Express.js, React, Filezilla.
								</p>
		      		</span>
	      		)
				break

				case 'exquisite_graveyard':
						desktopImageNum= 1,
						mobileImageNum= 1,
						projectName='Exquisite Graveyard'
						text = (
							<span>
								<p>
								Exquisite Graveyard is an interactive drawing game that was modeled on the Exquisite Corpse game played by surrealist artists like Andre Breton & Salvador Dali in the 1920’s. This progressive web app allows you to draw exquisite corpses with your friends online.
								<br/>
								<br/>
								Built as part of a four person team of developers in a two week sprint with Node.js, Express.js, React, and Firebase.
								</p>
		      		</span>
			      )
				break

				case 'd-construction':
						desktopImageNum = 1,
						mobileImageNum = 1,
						projectName=  'D-Construction'
						text = (
							<span>
								<p>
									D-Construction developed around the letter "D". I was interested in making my own typekit that looked like it was cut out of construction paper. All of the letters in the alphabet are constructed from various forms of the letter “D”; hence the title “D-Construction”.
									<br/>
									<br/>
									Built with Node.js, Express.js, and React-Redux.
								</p>
	      			</span>
	      		)
				break

				default:
					text = ""
				break
			}

			this.setState({
				desktopImageNum: desktopImageNum,
				mobileImageNum: mobileImageNum,
				projectName: projectName,
				text: text
			})


	 }

	render() {

		if (!this.props) {return null}

		let desktopImages = []
		let mobileImages = []

		for(let i = 0; i < this.state.desktopImageNum; i++) {
				desktopImages.push({
							src: `../../images/${this.props.title}/${i+1}.png`,
				      key: i
				})
		}

		for(let i = 0; i < this.state.mobileImageNum; i++) {
					mobileImages.push({
								src: `../../images/${this.props.title}/mobile${i+1}.png`,
					      key: `mobile${i}`
					})
			}

		return (
			<div className="singleproject">

				<p id="projectTitle">{this.state.projectName}</p>

			<div className="firstRow">
					<div className="iphonecontainer">
						<img  id="iphone" src="../../images/iphoneframe.png"/>
						<div className="iphonecontent">
							<Carousel images={mobileImages} />
						</div>
					</div>
				<div id="description">
					{this.state.text}
				</div>
			</div>

			<div className="macbookcontainer">
				<img  id="macbook" src="../../images/macbookframe.png"/>
				<div className="macbookcontent">
					<Carousel images={desktopImages} />
				</div>
			</div>

			</div>
		)
	}
}




