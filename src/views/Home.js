import React from 'react'
import Blobby from '../components/Blobby'

export default function Home () {
  return (
    <div className='homeContainer'>
      <Blobby
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'fixed'
        }}
        id='blobby'
      />
    </div>
  )
}
