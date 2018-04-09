import React from 'react'
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
            <a
              href='https://github.com/ketikat'
              rel='noopener noreferrer'
              target='_blank'
            >
              <i className='fa fa-4x fa-github' />
              <p>github</p>
            </a>
          </div>

          <div>
            <a
              href='https://www.linkedin.com/in/kat-ballo-11200063/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-4x fa-linkedin' />
              <p>LinkedIn</p>
            </a>
          </div>

          <div id='cvLink'>
            <a href='../../katballo-CV.pdf' download='katballo-CV.pdf'>
              <img src='../cv.svg' className='fa' />
              <p> download</p>
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
