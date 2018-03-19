import React from 'react'
require('../styles/aboutContact.css')

export default function Contact( props )  {
  return (
  <div id="contactContainer">
    <h1 className="hide">Contact</h1>

      <p >
        Say hello / get in touch:
      </p>

      <div id="iconsContainer">
          <div>
          <a href="https://github.com/ketikat">
             <i className="fa fa-4x fa-github" />
            <p>github</p>
          </a>
          </div>
          <div>
          <a href="https://www.linkedin.com/in/kat-ballo-11200063/">
            <i className="fa fa-4x fa-linkedin" />
            <p>LinkedIn</p>
          </a>
          </div>

          <div id="cvLink">
          <a href="https://kat.ballo/cv">
            <img src="../cv.svg" className="fa" />
            <p> download</p>
          </a>
          </div>
          <div>
          <a href="mailto:katballo@gmail.com">
            <i className="fa fa-4x fa-envelope-o" />
            <p> &nbsp;Email</p>
          </a>
          </div>
      </div>

  </div>
  )
}
