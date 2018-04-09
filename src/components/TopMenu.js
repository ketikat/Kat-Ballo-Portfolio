import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
require('../styles/menu.css')

export default function TopMenu () {
  return (
    <div className='topMenu'>
      <Link to='/'>
        <p className='menuItem'>
          Kat Ballo <i className='fa fa-hand-peace-o' aria-hidden='true' />
        </p>
      </Link>
      <HamburgerMenu />
    </div>
  )
}
