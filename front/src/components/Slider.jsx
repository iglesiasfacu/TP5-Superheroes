import React, {useState, useEffect} from 'react';
import './styles/Slider.css';
import { motion } from 'framer-motion';

const Slider = ({imagenes}) => {

    const [img, setImg] = useState();


    useEffect(() => {
        setImg(imagenes.split(','))
    },[])

    console.log(img)

  return (
    <motion.div className="slider-container">
        <motion.div className="slider" 
            drag="x" 
            dragConstraints={{right: 0}}>
            {  img &&
                img.map((imagen) => {
                    return (
                        <motion.div className="item">
                            <img src={imagen} alt="" />
                        </motion.div>
                    )
                })  
            }
        </motion.div>
    </motion.div>
  )
}

export default Slider