import React from 'react'
require('../styles/about.css')


export default function About (props){
	return(

			<div className="aboutContainer">
				<h1 className="hide">About</h1>
				<div>
					<p>
						Hi I'm Kat, and I'm a Software Developer living in Brooklyn, NY.
					</p>

					<p>
						I like using Javascript(ES6), React, Redux, Node.js, Express, Firebase, Git, PostgreSQL, WebSockets, HTML, CSS, and Bootstrap.
					</p>

					<p>
						Please get in touch if you'd like to work on something together &nbsp;
						<a href="mailto:katballo@gmail.com">
							<i className="fa fa-envelope-o"></i>
						</a>
					</p>
				</div>
			</div>
	)
}
