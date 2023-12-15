import React, { useState } from "react";

const ProductForm = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [product, setProduct] = useState("");
  let isFilled = false;
  if (
    heading !== "" &&
    description !== "" &&
    tag !== "" &&
    product !== ""
  )
    isFilled = true;

  return (
    <form className="flex flex-col gap-3 flex-1">
      <input
        value={heading}
        onChange={(e) => {
          setHeading(e.target.value);
        }}
        placeholder="Add a Heading"
        type="text"
        className="h-[73px] px-4 py-3 bg-neutral-200 rounded-lg border border-stone-300 "
      />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Add a Description"
        type="text"
        className=" h-[120px] px-4 py-3 bg-neutral-200 rounded-lg border border-stone-300"
      />
      <div className="flex gap-4">
        <input
          value={tag}
          onChange={(e) => {
            setTag(e.target.value);
          }}
          placeholder="Add a Tag"
          type="text"
          className=" h-[60px] flex-1 px-4 py-3 bg-neutral-200 rounded-lg border border-stone-300 "
        />
        <input
          value={product}
          onChange={(e) => {
            setProduct(e.target.value);
          }}
          placeholder="Add a Product name"
          type="text"
          className=" h-[60px] flex-1 px-4 py-3 bg-neutral-200 rounded-lg border border-stone-300"
        />
      </div>
      <div className="flex gap-6 justify-end">
        <button className="text-stone-950 text-opacity-50 text-lg leading-4 px-4 py-2 rounded-md border border-stone-950 border-opacity-50 ">
          Save to draft
        </button>
        <button
          disabled={!isFilled}
          className={`${
            isFilled
              ? "text-stone-50 text-opacity-100"
              : "text-stone-50 text-opacity-50  "
          } transition-all text-lg font-medium  leading-4 px-4 py-2 bg-stone-950 rounded-md border border-black`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
