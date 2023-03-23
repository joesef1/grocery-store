import React from 'react'
import banner from '../assets/images/banner.jpg'

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#212121',
    textAlign: 'center',
  };

  return (
    <div style={bannerStyle}>
      <h1>My Banner Title</h1>
    </div>

  )
}

export default Banner
