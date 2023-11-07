import React, { useRef, useState } from 'react';
import "./Index.css"
import { postProfileData } from "../utils/ApiManager";
import { useSelector } from "react-redux";

function FormWithImage(props) {
  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const DesignationRef = useRef(null);
  const ageRef = useRef(null);
  const imageRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const {onLoginnSystem} = useSelector((state) => state);
  console.log(onLoginnSystem);
  const handleImageUpload = () => {
    imageRef.current.click();
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Image = event.target.result;
      setImagePreview(base64Image); 

    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };




  const handleInputChange = async(e) => {
    e.preventDefault();
  
    const form = formRef.current;
    const formData = new FormData();

    formData.append('name', nameRef.current.value);
    formData.append('email', emailRef.current.value);
    formData.append('Designation', DesignationRef.current.value);
    formData.append('age', ageRef.current.value);
    formData.append('image', imagePreview);
    formData.append('user_id', onLoginnSystem?.user?.id);
 
   await postProfileData(formData).then((response) => {
        console.log('Form submission response:', response.data);
      })
      .catch((error) => {
        console.error('Error submitting the form:', error);
      });
  };



  return (
    <form
      ref={formRef}
      className="form"
      autoComplete="off"
      onSubmit={handleInputChange}
      {...props}
    >
      <input
        type="text"
        placeholder="Name"
        ref={nameRef}
        required
        className="input"
      />
      <input
        type="email"
        placeholder="Email"
        ref={emailRef}
        required
        className="input"
      />
      <input
        type="Designation"
        placeholder="Designation"
        ref={DesignationRef}
        required
        className="input"
      />
      <input
        type="number"
        placeholder="Age"
        ref={ageRef}
        required
        className="input"
      />
      <input
        type="file"
        accept="image/*"
        ref={imageRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <label
        htmlFor="image"
        onClick={handleImageUpload}
        className="upload-label"
      >
        Upload Image
      </label>
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Image Preview"
          className="image-preview"
        />
      )}
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
}

export default FormWithImage;
