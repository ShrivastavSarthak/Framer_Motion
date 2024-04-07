import React from "react";
import { FaRegFile } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
const Card = ({ data, refrence }) => {
  return (
    <motion.div
      drag
      dragConstraints={refrence}
      whileDrag={{scale:1.2}}
      dragElastic={0.2}
      dragTransition={{bounceStiffness:600,bounceDamping:10}}
      className="
    relative 
    w-60 h-72 
    flex-shrink-0 
    rounded-[40px] bg-zinc-900 
    text-white 
    py-10 px-8 
    overflow-hidden"
    >
      <FaRegFile />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3 mb-3 px-8 ">
          <h5>{data.fileSize}</h5>
          <spam className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <MdOutlineClose size=".7em" color="#fff" />
            ) : (
              <MdFileDownload size=".7em" color="#fff" />
            )}
          </spam>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${data.tag.tagColor} flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
