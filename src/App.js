import './App.css';
import { motion } from "framer-motion";
import {useState, useEffect, useRef} from 'react';
import images from './images';

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[])
  return (
    <div className="App">
    <h2>All SKAte bords</h2>
      <motion.div 
      ref={carousel} 
      className="carousel" 
      whileTap={{cursor:"grabbing"}}
      >
        <motion.div 
        drag="x" 
        dragConstraints={{right: 0, left: -width}}
        className="inner-carousel">
          {images.map((image) =>{
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt=""/>
                <div className="box-info">
                <p>more</p>
                <button>By</button>
                </div> 
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;