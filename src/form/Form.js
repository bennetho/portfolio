import React, { useState } from 'react';
import useForm from './useForm';
import validate from './validateLogin';
import './form.css';

const Form = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );

  function submit() {
    console.log('Submitted Succesfully');
  }

  return (
    <section className='container contact section ' id='contact'>
      <div className='section-title contact-title '>
        <h2>contact</h2>
        <div className='underline'></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className='section-center appointment-form'
        noValidate
      >
        <div className='singleItem'>
          <label>Name</label>
          <div>
            <input
              className={`${errors.name && 'inputError'} form-control`}
              name='name'
              type='name'
              placeholder='Name...'
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && <aside className='error'>{errors.name}</aside>}
          </div>
        </div>
        <div className='singleItem'>
          <label>Email</label>
          <div>
            <input
              className={`${errors.email && 'inputError'} form-control`}
              name='email'
              type='email'
              placeholder='Email...'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <aside className='error'>{errors.email}</aside>}
          </div>
        </div>
        <div className='singleItem'>
          <label>Telephone</label>
          <div>
            <input
              name='phone'
              type='number'
              placeholder='(Optional...)'
              className='form-control'
              value={values.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='singleItem'>
          <label>Message</label>
          <div>
            <textarea
              className={`${
                errors.email && 'inputError'
              } form-control input-textarea`}
              name='message'
              type='text'
              placeholder='Your Message...'
              value={values.message}
              onChange={handleChange}
            />
            {errors.message && (
              <aside className='error'>{errors.message}</aside>
            )}
          </div>
        </div>
        <div className='success'></div>
        <div className='failed'></div>
        <div className='btn form-btn'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </section>
  );
};

// form
// label / input for email
// label / input for name
// signup button

// handle changes
// handle submit

// custom react hook

// handle errors
// show errors if there are errors

export default Form;
