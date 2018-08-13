import React from 'react'
import {Link} from 'react-router-dom'
require('../styles/aboutContact.css')

export default function Contact (props) {
  return (
    <div className='contactOutterContainer'>
      <div id='contactContainer'>
        <h3>contact</h3>
        <p>
          Want to collaborate? Have questions?
          <br />
          Say hello / get in touch:
        </p>
        <div id='iconsContainer'>
          <div>
            <Link
              to='https://github.com/ketikat'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-4x fa-github' />
              <p>github</p>
            </Link>
          </div>

          <div>
            <Link
              to='https://www.linkedin.com/in/kat-ballo'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-4x fa-linkedin' />
              <p>LinkedIn</p>
            </Link>
          </div>

          <div id='cvLink'>
            <a href='../../Kat_Ballo_CV.pdf' download='Kat_Ballo_CV.pdf'>
              <img src='../cv.svg' className='fa' />
              <p>download</p>
            </a>
          </div>

          <div>
            <a href='mailto:katballo@gmail.com'>
              <i className='fa fa-4x fa-envelope-o' />
              <p> &nbsp;Email</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
