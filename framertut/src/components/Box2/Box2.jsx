import React, { Fragment } from "react";
import { motion } from "framer-motion";
const Box2 = () => {
  return (
    <Fragment>
      <div className="box-container">
        <motion.div
          className="box"
          drag
          dragConstraints={{
            right:20,
            left:-20,

          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
        ></motion.div>
      </div>
    </Fragment>
  );
};

export default Box2;
