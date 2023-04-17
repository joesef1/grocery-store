import { React, useState } from "react";
import Moon from "../destination/image-moon.png";
import Europa from "../destination/image-europa.png";
import Mars from "../destination/image-mars.png";
import Titan from "../destination/image-titan.png";
import { motion,AnimatePresence } from "framer-motion";




function Destination() {
  const [toggleState, setToggleState] = useState(1);
  const [selectedTab, setSelectedTab] = useState(true);
  const toggletab = (index) => {
    setToggleState(index);
  };

  return (
    <motion.div className="Destination"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <div className="container-destination resp-d">

            <p className="orbit-text dist">
              <span className="span">
                <strong>01 </strong>
              </span>{" "}
              pick your destination
            </p>
          

        <div className="orbit-section">


        


          <div className="orbit-imgs tablet">
            <img
              className="orbit-img" alt="img"
              src={ 
                toggleState === 1
                  ? Moon
                  : toggleState === 2
                  ? Mars
                  : toggleState === 3
                  ? Europa
                  : 
                  Titan
                  
              }
            />
          </div>
        </div>

        <div className="orbit-route-section">
          <div className="content-container">
            <div className="bloc-tabs">

              <div
                onClick={() => toggletab(1)}
                className={toggleState === 1 ? "tab active-tabs" : "tab"}
              >
                moon
              </div>
              <div
                onClick={() => toggletab(2)}
                className={toggleState === 2 ? "tab active-tabs" : "tab"}
              >
                mars
              </div>
              <div
                onClick={() => toggletab(3)}
                className={toggleState === 3 ? "tab active-tabs" : "tab"}
              >
                Europa
              </div>
              <div
                onClick={() => toggletab(4)}
                className={toggleState === 4 ? "tab active-tabs" : "tab"}
              >
                Titan
              </div>
            </div>
            <AnimatePresence  >

            <motion.div
            key={selectedTab ? selectedTab : "empty"}
 initial={{ y: 10, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: -10, opacity: 0 }}
 transition={{ duration: 0.2 }}
              className={
                toggleState === 1
                  ? "orbit-container active-orbit-container"
                  : "orbit-container"
              }
            >
              <div className="container-info">
                <div className="content">
                  <h1 className="name">moon</h1>
                  <p className="orbit-para">
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history. 
                    {/* by
                    visiting the Luna 2 and Apollo 11 landing sites. */}
                  </p>
                </div>
                <span className="info-line"></span>
                <div className="more-info">
                  <div className="distance">
                    <p className="orbit-p">Avg. distance</p>
                    <h2 className="orbit-h2">384,400 km</h2>
                  </div>
                  <div className="time t-t">
                    <p className="orbit-p">Est. travel time</p>
                    <h2 className="orbit-h2">3 days</h2>
                  </div>
                </div>
              </ div>
            </motion.div>
            </AnimatePresence>

            <AnimatePresence  >

<motion.div
key={selectedTab ? selectedTab : "empty"}
initial={{ y: 10, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: -10, opacity: 0 }}
transition={{ duration: 0.2 }}
              className={
                toggleState === 2
                  ? "orbit-container active-orbit-container"
                  : "orbit-container"
              }
            >
              <div className="content">
                <h1 className="name">Mars</h1>
                <p className="orbit-para">
                  Don’t forget to pack your hiking boots. You’ll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It’s two and a half times the size of Everest!
                </p>
              </div>
              <span className="info-line"></span>
              <div className="more-info">
                <div className="distance">
                  <p className="orbit-p">Avg. distance</p>
                  <h2 className="orbit-h2">225 mil. km</h2>
                </div>
                <div className="time t-t">
                  <p className="orbit-p">Est. travel time</p>
                  <h2 className="orbit-h2">9 months</h2>
                </div>
              </div>
              </motion.div>
            </AnimatePresence>



<AnimatePresence  >
<motion.div
key={selectedTab ? selectedTab : "empty"}
initial={{ y: 10, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
exit={{ y: -10, opacity: 0 }}
transition={{ duration: 0.2 }}
              className={
                toggleState === 3
                  ? "orbit-container active-orbit-container"
                  : "orbit-container"
              }
            >
              <div className="content">
                <h1 className="name">Europa</h1>
                <p className="orbit-para">
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey.
                   {/* or simple
                  relaxation in your snug wintery cabin. */}
                </p>
              </div>
              <span className="info-line"></span>
              <div className="more-info">
                <div className="distance">
                  <p className="orbit-p">Avg. distance</p>
                  <h2 className="orbit-h2">628 mil. km</h2>
                </div>
                <div className="time t-t">
                  <p className="orbit-p">Est. travel time</p>
                  <h2 className="orbit-h2">3 years</h2>
                </div>
              </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence  >
            <motion.div
            // key={selectedTab ? selectedTab : "empty"}
 initial={{ y: 10, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: -10, opacity: 0 }}
 transition={{ duration: 0.5 }}
              className={
                toggleState === 4
                  ? "orbit-container active-orbit-container"
                  : "orbit-container"
              }
            >
              <div className="content">
                <h1 className="name">Titan</h1>
                <p className="orbit-para">
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </p>
              </div>
              <span className="info-line"></span>
              <div className="more-info">
                <div className="distance">
                  <p className="orbit-p">Avg. distance</p>
                  <h2 className="orbit-h2">1.6 bil. km</h2>
                </div>
                <div className="time t-t">
                  <p className="orbit-p">Est. travel time</p>
                  <h2 className="orbit-h2">7 years</h2>
                </div>
              </div>
            </motion.div>
            </AnimatePresence>



          </div>
        </div>
      </div>


    </motion.div>
    
  );
}

export default Destination;