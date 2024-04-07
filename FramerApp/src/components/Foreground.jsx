import React, { Fragment, useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref =useRef(null)
  const data = [
    {
      desc: "hello here you can write the constent of the card.",
      fileSize: ".4Mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-blue-600",
      },
    },
    {
      desc: "hello here you can write the constent of the card.",
      fileSize: ".4Mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-green-600",
      },
    },
    {
      desc: "hello here you can write the constent of the card.",
      fileSize: ".4Mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "bg-sky-600",
      },
    },
  ];
  return (
    <Fragment>
      <div ref={ref} className="fixed top-0 left-0 z-[3] p-5 w-full h-full flex gap-10 flex-wrap">
        {data.map((item, index) => (
          <Card data={item} refrence={ref} />
        ))}
      </div>
    </Fragment>
  );
};

export default Foreground;
