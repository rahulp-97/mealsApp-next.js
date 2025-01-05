'use client';
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState(null);
    const imageRef = useRef();
    function handlePickClick() {
        imageRef.current.click();
    };
    function handleImageChange(e) {
        const file = e?.target?.files?.[0];
        if(!file) {
            setPickedImage(null);
        };
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        }
    };
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet!</p>}
            {pickedImage && <Image style={{objectFit: 'cover'}} src={pickedImage} alt='image picked by user' fill />}
        </div>
        <input
          accept="image/png, image/jpeg"
          className={classes.input}
          id={name}
          name={name}
          onChange={handleImageChange}
          ref={imageRef}
          required
          type="file"
        />
        <button className={classes.button} onClick={handlePickClick} type="button">
            Pick an image
        </button>
      </div>
    </div>
  );
}
