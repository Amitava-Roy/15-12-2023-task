import { useState } from "react";

import "./App.css";
import UploadCaseStudy from "./container/upload-case-study";
import Image from "./assets/close.svg";
import CaseStudyForm from "./container/case-study-form";

function App() {
  const [file, setFile] = useState("");

  return (
    <main className="w-full  flex items-center justify-center">
      <div className="w-[700px] mt-8 bg-slate-50 shadow-md flex flex-col justify-center items-center rounded-md relative p-6 ">
        <img
          src={Image}
          alt="close"
          className="h-6 w-6 absolute top-0 right-0 mt-4 mr-4"
        />
        <h1 className="text-3xl text-neutral-950 mb-3">
          Upload Your Case Study
        </h1>
        {file === "" && (
          <UploadCaseStudy setFile={setFile} />
        )}
        {file.name && (
          <CaseStudyForm
            fileName={file.name}
            setFile={setFile}
          />
        )}
      </div>
    </main>
  );
}

export default App;
