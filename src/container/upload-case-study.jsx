import React from "react";
import DropZone from "../drop-zone";

const UploadCaseStudy = ({ setFile }) => {
  return (
    <div>
      <div className="w-[620px] text-center">
        <p className="text-neutral-600 text-lg mb-3  font-medium font-['Poppins'] ">
          Submit your solved case study to
          <span className="ml-1 text-stone-950 text-xl font-semibold font-['Poppins'] ">
            get a chance to get feedback from experts
          </span>
          , increase your chances of cracking the interview,
          and improve your product thinking skills!
        </p>
      </div>
      <div className="w-full h-[1px] bg-neutral-400"></div>
      <DropZone setFile={setFile} />
    </div>
  );
};

export default UploadCaseStudy;
