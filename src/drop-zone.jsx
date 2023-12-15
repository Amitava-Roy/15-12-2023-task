import React, { useState } from "react";
import Image from "./assets/Vector.svg";

const DropZone = ({ setFile }) => {
  const isTypePPT = (file) => {
    if (file.type === "application/vnd.ms-powerpoint") {
      setFile(file);
      console.log("next page");
    } else {
      alert("only ppt supported");
    }
  };

  const dropHandler = (e) => {
    e.preventDefault();
    isTypePPT(e.dataTransfer.files[0]);
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={dropHandler}
      onDragOver={dragOverHandler}
      className=" flex flex-col items-center text-center "
    >
      <label
        className="p-4 cursor-pointer bg-slate-300 rounded-full my-3"
        htmlFor="ppt"
      >
        <img src={Image} alt="drop" />
      </label>
      <div className="text-stone-950  flex flex-col gap-3">
        <p className="text-2xl">
          Drop your files here or{" "}
          <label
            htmlFor="ppt"
            className="underline font-bold leading-normal cursor-pointer"
          >
            Browse
          </label>
        </p>
        <p className="text-xl leading-tight">
          File Support:
          <span className="font-medium">PPT</span>
        </p>
        <p className="text-xl leading-tight">
          Size: <span className="font-medium">10mb</span>
        </p>
      </div>
      <input
        id="ppt"
        type="file"
        hidden
        onChange={(e) => {
          isTypePPT(e.target.files[0]);
        }}
      />
    </div>
  );
};

export default DropZone;
