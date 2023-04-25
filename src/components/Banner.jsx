import React from 'react'
import banner from '../assets/images/banner.jpg'

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '450px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#212121',
    textAlign: 'center',
    borderRadius: '10px',
  };

  return (
    <div className='rounded-md mb-8 ' style={bannerStyle}>
      <h1 className='text-4xl bold font-bold mb-3 capitalize'>Products Delivered in 90 Minutes</h1>
      <p className='text-lg capitalize text-slate-400'>Get your products delivered at your doorsteps all day everyday</p>
    </div>

  )
}

export default Banner
