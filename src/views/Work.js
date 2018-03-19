import React, {Component} from 'react'
import history from '../history'
import { Link } from 'react-router-dom'

require('../styles/work.css')
import anime from 'animejs'

class Work extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
		this.animate = this.animate.bind(this)
		this.createMorphs = this.createMorphs.bind(this)
	}


 	componentDidMount() {
 		this.createMorphs()
    this.animate()
  }

	createMorphs(){
      let pathEl1
	    let path1
	    this.refs.iloveplant && (pathEl1 = this.refs.iloveplant.querySelector('path'))
	    pathEl1 && (path2 = pathEl1.getAttribute('pathdata').split(';'))
	    path1 && (path1.push(pathEl1.getAttribute('d')))

      let pathEl2
      let path2
      this.refs.exquisite_graveyard && (pathEl2 = this.refs.exquisite_graveyard.querySelector('path'))
      pathEl2 && (path2 = pathEl2.getAttribute('pathdata').split(';'))
      path2 && (path2.push(pathEl2.getAttribute('d')))

      let pathEl3
      let path3
      this.refs.d_construction && (pathEl3 = this.refs.d_construction.querySelector('path'))
      pathEl3 && (path2 = pathEl3.getAttribute('pathdata').split(';'))
      path3 && (path3.push(pathEl3.getAttribute('d')))

      let pathEl4
      let path4
      this.refs.artist_portfolio && (pathEl4 = this.refs.artist_portfolio.querySelector('path'))
      pathEl4 && (path2 = pathEl4.getAttribute('pathdata').split(';'))
      path4 && (path4.push(pathEl4.getAttribute('d')))
	}



	animate() {
	        anime.remove( this.refs.iloveplant.querySelector('path') )
	        anime({
	          targets: this.refs.iloveplant.querySelector('path'),
	          duration: 30000,
	          easing: [0.5, 0, 0.5, 1],
	          // rotate: anime.random(-5,-15),
	          d: this.refs.iloveplant.querySelector('path').getAttribute('pathdata').split(';'),
	          loop: true,
	          direction: 'alternate',
	          scale: .8
	        })

          anime.remove( this.refs.exquisite_graveyard.querySelector('path') )
          anime({
            targets: this.refs.exquisite_graveyard.querySelector('path'),
            duration: 50000,
            easing: [0.5, 0, 0.5, 1],
            // rotate: anime.random(5,20),
            d: this.refs.exquisite_graveyard.querySelector('path').getAttribute('pathdata').split(';'),
            loop: true,
            direction: 'alternate',
            scale: .8
          })

          anime.remove( this.refs.d_construction.querySelector('path') )
          anime({
            targets: this.refs.d_construction.querySelector('path'),
            duration: 25000,
            easing: [0.5, 0, 0.5, 1],
            // rotate: anime.random(5,20),
            d: this.refs.d_construction.querySelector('path').getAttribute('pathdata').split(';'),
            loop: true,
            direction: 'alternate',
            scale: .8
          })

          anime.remove( this.refs.artist_portfolio.querySelector('path') )
          anime({
            targets: this.refs.artist_portfolio.querySelector('path'),
            duration: 35000,
            easing: [0.5, 0, 0.5, 1],
            // rotate: anime.random(5,9),
            d: this.refs.artist_portfolio.querySelector('path').getAttribute('pathdata').split(';'),
            loop: true,
            direction: 'alternate',
            scale: .8
          })
	  }

	render(){
		let allProjectsThumbs = []

		let names = ['iloveplant', 'exquisite_graveyard', 'artist_portfolio','d_construction']

		for(let i = 0; i < names.length; i++) {
				allProjectsThumbs.push({
							src: `../../images/allProj/${names[i]}.png`,
				      link: `/work/${names[i]}`,
				      morphId: `${names[i]}`,
				})
		}

		return (
        <div id="outterWorkContainer">
            <p>Projects</p>
					<div className="workContainer">

          		{allProjectsThumbs.map((image, index) => {

                let projectName

                switch (image.morphId) {
                    case 'iloveplant':
                        projectName='I Love Plant'
                    break

                    case 'artist_portfolio':
                        projectName='Artist Portfolio'
                    break

                    case 'exquisite_graveyard':
                        projectName='Exquisite Graveyard'
                    break

                    case 'd_construction':
                        projectName='D-Construction'
                    break
                  }
          			return (

                 <div id={image.morphId}>
		            	<img
			              src={image.src}
			              className="projectThumb"
			              draggable={false}
			              style={{
			              	position: 'relative',
								      cursor: 'pointer',
								      clipPath: `url(#${image.morphId}Clip)`,
								      WebkitClipPath: `url(#${image.morphId}Clip)`,
                      overflow: "visible"
			              }}
		            	/>
                  <Link className="projTitle" to={image.link}>{projectName}</Link>
                </div>
          		)})}

						<svg
  						className="hide"
  	          xmlns="http://www.w3.org/2000/svg"
  	          style={{opacity: 0, transition: 'transform 2s ease-out'}}
  	          ref="iloveplant"
  	          preserveAspectRatio="none"
  	          viewBox="0 0 1 1"
  	          overflow="visible"
              key="plantsvg"
            >
              <defs>
                  <clipPath
                    ref="iloveplantClip"
                    id="iloveplantClip"
                    clipPathUnits="objectBoundingBox"
                    style={{transformOrigin:"center"}}
                  >
                    <path
                    id="path"
                    d= "M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z"
                    pathdata="M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z"
                    />
                  </clipPath>
              </defs>
          </svg>
          <svg
            key="gravesvg"
						className="hide"
	          xmlns="http://www.w3.org/2000/svg"
	          style={{opacity: 0, transition: 'transform 2s ease-out'}}
	          id="exquisite_graveyard"
	          ref="exquisite_graveyard"
	          preserveAspectRatio="none"
	          viewBox="0 0 1 1"
	          overflow="visible"
          >
              <defs>
                  <clipPath
                    id="exquisite_graveyardClip"
                    clipPathUnits="objectBoundingBox"
                    style={{transformOrigin:"center"}}
                  >
                    <path
                    id="path"
                    d= "M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z"
                    pathdata="M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z"
                    />
                  </clipPath>
              </defs>
          </svg>

          <svg
            key="Dsvg"
            className="hide"
            xmlns="http://www.w3.org/2000/svg"
            style={{opacity: 0, transition: 'transform 2s ease-out'}}
            ref="d_construction"
            preserveAspectRatio="none"
            viewBox="0 0 1 1"
            overflow="visible"
          >
              <defs>
                  <clipPath
                    id="d_constructionClip"
                    clipPathUnits="objectBoundingBox"
                    style={{transformOrigin:"center"}}
                  >
                    <path
                    id="path"
                    d= "M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z"
                    pathdata="M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z"
                    />
                  </clipPath>
              </defs>
          </svg>
          <svg
              key="artsvg"
              className="hide"
              xmlns="http://www.w3.org/2000/svg"
              style={{opacity: 0, transition: 'transform 2s ease-out'}}
              ref="artist_portfolio"
              preserveAspectRatio="none"
              viewBox="0 0 1 1"
              overflow="visible"
            >
                <defs>
                    <clipPath
                      id="artist_portfolioClip"
                      clipPathUnits="objectBoundingBox"
                      style={{transformOrigin:"center"}}
                    >
                      <path
                      id="path"
                      d= "M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z"
                      pathdata="M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z"
                      />
                    </clipPath>
                </defs>
            </svg>
</div>
					</div>
		)
	}
}

export default Work




// import React, {Component} from 'react'
// import history from '../history'

// require('../styles/work.css')
// import anime from 'animejs'

// import Grid from '../components/Grid'

// class Work extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 		}
// 		this.handleClick = this.handleClick.bind(this)
// 		this.animate = this.animate.bind(this)
// 		this.createMorph = this.createMorph.bind(this)
// 	}


//  	componentDidMount() {
//  		this.createMorph(iloveplant)
//     // this.createMorph(d-construction)
//     this.createMorph(artist_portfolio)
//     this.createMorph(exquisite_graveyard)
//     // this.createMorph("iloveplant")
//     // this.createMorph("d-construction")
//     // this.createMorph("artist_portfolio")
//     // this.createMorph("exquisite_graveyard")
//   }

// 	createMorph(refName){
// 			let pathEl
// 	    let path2
// 	    this.refs.refName && (pathEl = this.refs.refName.querySelector('path'))
// 	    pathEl && (path2 = pathEl.getAttribute('pathdata').split(';'))
// 	    path2 && (path2.push(pathEl.getAttribute('d')))
// 	    this.animate(refName)
// 	}

// 	handleClick (link){
// 		history.push(link)
// 	}

// 	animate(refName) {

// 	        anime.remove( this.refs.refName.querySelector('path') )
// 	        anime({
// 	          targets: this.refs.refName.querySelector('path'),
// 	          duration: 10000,
// 	          easing: [0.5, 0, 0.5, 1],
// 	          rotate: anime.random(5,20),
// 	          d: this.refs.refName.querySelector('path').getAttribute('pathdata').split(';'),
// 	          loop: true,
// 	          direction: 'alternate',
// 	          scale: .5
// 	        })
// 	  }

// 	render(){
// 		let allProjectsThumbs = []

// 		let names = ['iloveplant', 'artist_portfolio', 'exquisite_graveyard', 'd-construction']

// 		for(let i = 0; i < names.length; i++) {
// 				allProjectsThumbs.push({
// 							url: `../../images/allProj/${names[i]}.png`,
// 				      link: `work/${names[i]}`,
// 				      morphId: `${names[i]}`
// 				})
// 		}

// 		return (
// 					<div className="workContainer">
// 						<p>Projects</p>
// 						<div id="gridContainer">
// 							 <Grid
// 							 	// paddingBottom="30%"
// 								imgFitting="contain"
// 								columns={[2,2,1]}
// 							 	clickHandler={this.handleClick}
// 							 	imagesArray={allProjectsThumbs}
// 							 	padding="10px"
// 							 />
// 						</div>

// 						<svg
// 						className="hide"
// 	          xmlns="http://www.w3.org/2000/svg"
// 	          style={{opacity: 0, transition: 'transform 2s ease-out'}}
// 	          id="iloveplant"
// 	          ref="iloveplant"
// 	          preserveAspectRatio="none"
// 	          viewBox="0 0 1 1"
// 	          overflow="visible"
//           >
//               <defs>
//                   <clipPath
//                     ref="iloveplantClip"
//                     id="iloveplantClip"
//                     clipPathUnits="objectBoundingBox"
//                     style={{transformOrigin:"center"}}
//                   >
//                     <path
//                     id="path"
//                     d= "M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z"
//                     pathdata="M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z"
//                     />
//                   </clipPath>
//               </defs>
//           </svg>
//           <svg
// 						className="hide"
// 	          xmlns="http://www.w3.org/2000/svg"
// 	          style={{opacity: 0, transition: 'transform 2s ease-out'}}
// 	          id="littleMorph2"
// 	          ref="littleMorph2"
// 	          preserveAspectRatio="none"
// 	          viewBox="0 0 1 1"
// 	          overflow="visible"
//           >
//               <defs>
//                   <clipPath
//                     ref="littleMorphClip2"
//                     id="littleMorphClip2"
//                     clipPathUnits="objectBoundingBox"
//                     style={{transformOrigin:"center"}}
//                   >
//                     <path
//                     id="path"
//                     d= "M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526Z"
//                     pathdata="M  0.883 0.543 C 0.869 0.667 0.733 0.731 0.634 0.779 0.514 0.839 0.363 0.898 0.246 0.832 0.174 0.792 0.129 0.688 0.117 0.595 0.099 0.455 0.117 0.271 0.212 0.183 0.329 0.075 0.532 0.023 0.658 0.168 0.752 0.275 0.901 0.392 0.883 0.543 Z;M 0.929 0.526C 0.913 0.667 0.83 0.824 0.715 0.871 0.59 0.922 0.452 0.813 0.333 0.744 0.235 0.688 0.106 0.636  0.071 0.515 0.037 0.399 0.072 0.236 0.154 0.159 0.323 0.001 0.623 0.00 0.803 0.129 0.904 0.207 0.946 0.386 0.929  0.526 Z;M 0.883 0.526 C 0.866 0.667 0.78 0.814 0.669 0.871 0.539 0.938 0.366 0.904 0.246 0.815 0.178 0.766 0.129 0.671 0.117 0.579 0.099 0.438  0.118 0.256 0.212 0.167 0.354 0.032 0.605 0.012 0.757 0.129 0.859 0.206 0.9 0.386 0.883 0.526 Z"
//                     />
//                   </clipPath>
//               </defs>
//           </svg>


// 					</div>

// 		)
// 	}
// }

// export default Work
