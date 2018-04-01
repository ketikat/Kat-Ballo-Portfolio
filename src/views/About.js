import React from 'react'
require('../styles/aboutContact.css')

export default function About (props){
	return(
		<div className="aboutOutterContainer">
			<div className="aboutContainer">

				<div>
					<h3>about</h3>
					<p>
						Hi I'm Kat, and I'm a Software Developer living in Brooklyn, NY.
						<br/>
						<br/>
						I really like making things, and previously I've worked as a Designer, Architect, and Fabricator.
						<br/>
						<br/>
						Please get in touch if you'd like to work on something together &nbsp;
						<a href="mailto:katballo@gmail.com">
							<i className="fa fa-envelope-o"></i>
						</a>
					</p>
				</div>
				<br/>
				<br/>

				<div id="skillsSection">
					<h3>skills</h3>
					<h4>Javascript(ES6)</h4>
					<p>React, Redux, Webpack, Express, Node, SQL, PostgreSQL, WebSockets</p>
					<br/>
					<br/>
					<h4>Other</h4>
					<p>Git, Firebase, Ruby</p>
					<br/>
					<br/>
					<h4>Presentation</h4>
					<p>Bootstrap, CSS, HTML, AdobeCS</p>
					<br/>
					<br/>
					<h4>3D</h4>
					<p>Rhino, Autocad, Revti, Sketchup</p>
				</div>

			</div>
		</div>
	)
}

