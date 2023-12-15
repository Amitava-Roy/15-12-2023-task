import React from "react";
import Image from "../assets/Rectangle.png";
import ProductForm from "../../prouct-form";

const CaseStudyForm = ({ fileName, setFile }) => {
  return (
    <div>
      <div className="w-[620px] text-center">
        <p className="text-neutral-600 text-lg mb-3  font-medium font-['Poppins'] ">
          Share your solved case study to
          <span className="ml-1 text-stone-950 text-xl font-semibold font-['Poppins'] ">
            get a chance to get feedback from experts
          </span>
          , increase your chances of cracking the interview,
          and improve your product thinking skills!
        </p>
      </div>
      <div className="w-full h-[1px] bg-neutral-400"></div>
      <div className="flex flex-col gap-3 items-center">
        <div className="w-[230px] h-[120px]">
          <img
            src={Image}
            alt="drinking bottle"
            className="w-[230] h-[120] my-3"
          />
        </div>
        <div className="w-[230px] flex justify-between items-center ">
          <p className="text-sm">{fileName}</p>
          <label
            className="text-semibold text-sm underline cursor-pointer"
            htmlFor="ppt"
          >
            change file
          </label>
          <input
            id="ppt"
            type="file"
            hidden
            onChange={(e) => {
              if (
                e.target.files[0].type ===
                "application/vnd.ms-powerpoint"
              )
                setFile(e.target.files[0]);
            }}
          />
        </div>
      </div>
      <ProductForm />
    </div>
  );
};

export default CaseStudyForm;
