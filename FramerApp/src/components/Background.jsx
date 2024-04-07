import React, { Fragment } from "react";

const Background = () => {
  return (
    <Fragment>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-10 bg- flex justify-center text-xl text-zinc-600 font-semibold">
          Framer Motion
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-[16vw] leading-none tracking-tighter font-semibold text-zinc-900">
          Framer Motion
        </h1>
      </div>
    </Fragment>
  );
};

export default Background;
