import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  // -------------------handle submit----------------
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));

    setIsSubmitting(true);
  };

  // -------------------------------------------

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then((res) => {
        // document.querySelector('.success').innerHTML =
        //   'message sent thank you.';
        successMessage();
        reset();
      })
      .catch((err) => {
        // document.querySelector('.failed').innerHTML =
        //   'Messgae failed please try again.';
        failMessage();
      });
  };
  // ---------------------reset thr input-----------

  const reset = () => {
    setValues({
      email: '',
      name: '',
      phone: '',
      message: '',
    });
  };

  const successMessage = () => {
    let formMess = document.querySelector('.success');
    formMess.innerHTML = 'Message sent, i will get back to you shortly.';
    formMess.style.color = 'black';
    formMess.style.display = 'block';
    formMess.style.transition = '0.4s ease-in';
    formMess.style.padding = '1rem';
    formMess.style.background = 'green';
    setTimeout(() => {
      formMess.style.display = 'none';
    }, 6000);
  };
  const failMessage = () => {
    let formMess = document.querySelector('.failed');
    formMess.innerHTML = 'Messgae failed please try again.';
    formMess.style.opacity = '1';
    formMess.style.color = 'white';
    formMess.style.display = 'block';
    formMess.style.transition = '0.3s linear';
    formMess.style.padding = '1rem';
    formMess.style.background = 'red';
    setTimeout(() => {
      formMess.style.display = 'none';
    }, 10000);
  };

  // ----------------------useEffect-----------------
  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      isSubmitting &&
      sendFeedback('portfolio', { ...values })
    ) {
      callback();
      reset();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
