import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { formSubmit } from '../../store/actions/index';
import { submitForm } from '../../Helper/Partner';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';

const Form = () => {
  const [imageURL, setImageURL] = useState();
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const currentPartner = useSelector(({ partnerReducer }) => partnerReducer.currentPartner);

  const handleImageChange = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const image = e.target.files[0];

    reader.onloadend = () => {
      setImageURL(reader.result);
    };

    reader.readAsDataURL(image);
  };

  const handleChange = (e) => {
    dispatch(formSubmit({ ...currentPartner, [e.target.name]: e.target.value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(imageURL, currentPartner);
  };

  return (
    <form id="partner" encType="multipart/form-data" onSubmit={handleSubmit}>
      {step === 1
        ? <Step1 image={imageURL} click={handleNext} change={handleChange} changeImage={handleImageChange} partner={currentPartner} />
        : <Step2 change={handleChange} click={handlePrev} />}
    </form>
  );
};

export default Form;
