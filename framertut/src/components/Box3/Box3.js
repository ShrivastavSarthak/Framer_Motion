import React, { Fragment } from "react";
import { motion } from "framer-motion";
const Box3 = () => {
  const boxVarient={
    hidden:{
      x:"-100vw"
    },
    visible:{
      x:0,
      transition:{
        delay:0.5,
        when:"beforeChildren"
      }
    }
  }
  const listVarient={
    hidden:{
      x:"-10",
      opacity:0
    },
    visible:{
      x:0,
      opacity:1,
      staggerChildren:0.4
    }
  }
  return (
    <Fragment>
      <div className="box-container">
        <motion.div 
        className="box"
        variants={boxVarient }
        animate="visible"
        initial="hidden"
        >

          {[1, 2, 3].map(box => {
            return (<motion.li 
            className="boxItem"
            variants={listVarient}
           
            >
            </motion.li>
            )
          })}
        </motion.div>
      </div>
    </Fragment>
  );
};
export default Box3;
