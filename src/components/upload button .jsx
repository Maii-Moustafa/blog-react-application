import React from "react";
import { useState } from "react";

import Input from "../components/shared/input";

export default function UploadButton({
  handleChange,
  form,
  selectedImg,
  onChangeFile,
  handleUpload,
 isLoading,error
}) {
  //
  //------------- state -------------
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(null);
  const hiddenFileInput = React.useRef(null);

  //------------- handlers -------------
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  //------------- UI -------------
  return (
    <>
      {/*------------- choose img -------------*/}
      <div className="flex flex-col shadow-xl bottom-[180px] w-3/4">
        <div
          style={{
            maxWidth: "100%",
            maxHeight: "100rem",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            objectFit: "cover",
            overflow: "hidden",
          }}
          className="flex flex-col justify-end "
          onClick={handleClick}
        >
          <div className="relative ">
            {selectedImg.selectedImage ? (
              selectedImg.selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImg.selectedImage)}
                  alt="post photo"
                />
              )
            ) : (
              <>
                <img
                  className=" transition duration-300 ease-in-out hover:scale-110 "
                  src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                  alt="image placeholder"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-stone-600 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-40">
                  <div className="flex justify-center items-center">
                    <p className=" text-white ">Choose image to upload</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {/*------------- upload img -------------*/}
        {selectedImg.selectedImage && (
          <button className="btn rounded-none" onClick={handleUpload} disabled={isLoading}>
            Upload Image
          </button>
        )}
        {error && (
          <div className="alert shadow-lg mt-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={onChangeFile}
          style={{ display: "none" }}
        />
        {error && (
          <div className="alert shadow-lg mt-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}
        {/*------------- URL -------------*/}
        <div className="card-body p-4 bg-primary">
          <Input
            type="text"
            placeholder="Paste image URL "
            label="image URL"
            name="imageURL"
            value={form.imageURL}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
