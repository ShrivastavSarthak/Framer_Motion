import React, { Fragment} from 'react'
import {motion} from "framer-motion"
const Box4 = () => {

  return (
    <Fragment>
        <div className='box-container'>
            <motion.div 
            className='box'
            animate={{
                scale:[1,1.4,1.4,1,1],
                borderRadius:["20%","20%","50%","50%","20%","20%" ],
                rotate:[0,0,270,270,0]
            }}
            transition={{
                duration:4
            }}
            >
            
            </motion.div>

        </div>
    </Fragment>   
  )
}

export default Box4