"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="mt-4">
      <label htmlFor={name}>{label}</label>
      <div className="flex items-start gap-[1.5rem] mb-[1rem]">
        <div className="w-[10rem] h-[10rem] border-2 border-solid border-[#a4abb9] flex justify-center items-center text-center text-[#a4abb9] relative">
          {!pickedImage && <p className="m-0 p-[1rem]">No image picked yet.</p>}
          {pickedImage && (
            <Image
              className="object-cover"
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          onClick={handlePickClick}
          type="button"
          className="border-0 py-[0.5rem] px-[1.5rem] bg-[#a4abb9] rounded-sm cursor-pointer hover:bg-[#b3b9c6] focus:bg-[#b3b9c6]"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
