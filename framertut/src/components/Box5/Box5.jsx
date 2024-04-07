import React, { Fragment} from 'react'
import {motion, useAnimation} from "framer-motion"
const Box5 = () => {
    const control= useAnimation()
  return (
    <Fragment>
        <div className='box-container'>
            <button onClick={()=>{
                control.start({
                    x:1000,
                    transition:{duration: 2}
                })
            }}>Right</button>
            <button  onClick={()=>{
                control.start({
                    x:0,
                    transition:{duration: 2}
                })
            }} >Left</button>
            <button  onClick={()=>{
                control.start({
                    borderRadius:"50%",
                    transition:{duration: 1}
                })
            }} >Circle</button>
            <button  onClick={()=>{
                control.start({
                    borderRadius:"0",
                    transition:{duration: 1}
                })
            }}>Squar</button>
            <button  onClick={()=>{
                control.stop()
            }}>Stop</button>
            <motion.div 
            className='box'
            animate={control}
            >
            
            </motion.div>

        </div>
    </Fragment>   
  )
}

export default Box5