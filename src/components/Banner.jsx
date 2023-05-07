import React, {useEffect ,useState} from 'react'
import banner from '../assets/images/banner.jpg'
import warring from '../assets/images/warning.png'

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




  function Popup() {
    return <div className='flex items-center mt-5 p-4 bg-slate-100  rounded-lg'> <img className='w-8' src={warring} alt="" /> <p className='ml-3 text-red-400 text-xl'>this project still under production!</p> </div>;
  }
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (!popupShown) {
      setShowPopup(true);
      localStorage.setItem("popupShown", "true");
    }
  }, []);
  return (
    <div className='rounded-md mb-8 ' style={bannerStyle}>
      <h1 className='text-4xl bold font-bold mb-3 capitalize'>Products Delivered in 90 Minutes</h1>
      <p className='text-lg capitalize text-slate-400'>Get your products delivered at your doorsteps all day everyday</p>
      <div>
      {showPopup && <Popup />}
    </div>

    </div>

  )
}

export default Banner
