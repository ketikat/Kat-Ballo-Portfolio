import React from 'react'

const styles = {
	wrapper: {
		display: 'inline-flex',
		width: '75%',
		float: 'right',
		height: '100%'
	},
	text: {
		width: '60%',
		float: 'left',
		padding: '100px 50px'
	}
}

export default function Contact( props )  {
  return (
  <div >
    <h1 className="hide">Contact</h1>
    <div className="fade-bottom" />
    <div >

      <p >
      Available for contract work & commisions, please get in touch:
      </p>


      <div id="icons-container">
          <a href="https://aballo.artstation.com/">
            <img width="25" height="50" src="../artstation.svg" className="fa" id="artstationIcon" />
            <p id="artstationLink">Artstation</p>
          </a>
          <a href="https://www.linkedin.com/in/aleksander-w-ballo-27467061/">
            <i className="fa fa-linkedin" />
            <p>LinkedIn</p>
          </a>
          <a href="https://aleksander.ballo/cv">
            <img src="../cv.svg" className="fa" id="cvIco" />
            <p id="cvlink">CV Link</p>
          </a>
          <a href="mailto:aleksander.ballo@gmail.com">
            <i className="fa fa-envelope-o" />
          <p>Send Email</p>
          </a>
      </div>
    </div>
  </div>
  )
}

{/*
	<h1 style={{fontFamily: 'Lato', color: 'grey', paddingTop: 0}}><a href="mailto:aleksander.ballo@gmail.com">aleksander.ballo@gmail.com</a></h1>
*/}
