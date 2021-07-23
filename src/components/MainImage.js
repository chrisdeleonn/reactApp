import React from 'react'
import heroImage from '../images/oasis_diner.jpg'

function MainImage() {
  return (
    <div className='image-container'>
      <img className='main-image' src={heroImage} />
    </div>
  )
}

export default MainImage
