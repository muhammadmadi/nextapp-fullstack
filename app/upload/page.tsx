"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}



const UploadPage = () => {
  const [PublicId, setPublicId] = useState("");
  return (
    <>
      {PublicId && <CldImage  src={PublicId} width={270} height={180} alt=' a coffee image ' /> }
      <CldUploadWidget
        uploadPreset="jaodqemz"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
              Upload 
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
