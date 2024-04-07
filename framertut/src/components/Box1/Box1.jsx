import React, { Fragment, useState } from 'react'
import {motion} from "framer-motion"
const Box1 = () => {
    const [isAnimate,setIsAnimate] =useState(false)

  return (
    <Fragment>
        <div className='box-container'>
            <motion.div 
            className='box'
            animate={{
                x:isAnimate ? "60rem" : 0,
                opacity:isAnimate ? 1 : 0.5,
                rotate:isAnimate ? 360 : 0
            }}
            initial={{
                opacity:0.5
            }}
            transition={{
                type:"spring",
                stiffness:70
            }}
            onClick={()=>{setIsAnimate(!isAnimate)}}
            >
            
            </motion.div>

        </div>
    </Fragment>   
  )
}

export default Box1