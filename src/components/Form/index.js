import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { partnerList } from '../../services/client';
import { formSubmit, addList } from '../../store/actions/index';

import submitForm from '../../Helper/Partner/submitForm';
import Step1 from './steps/Step1';

const Form = (props) => {
  const [imageURL, setImageURL] = useState();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(imageURL, currentPartner);
    props.status(e);
  };

  return (
    <>
      <form id="partner" encType="multipart/form-data" onSubmit={handleSubmit}>
        <Step1 image={imageURL} change={handleChange} changeImage={handleImageChange} partner={currentPartner} />
      </form>
    </>
  );
};

export default Form;
