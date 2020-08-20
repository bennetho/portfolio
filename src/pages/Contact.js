// import React, { Component } from 'react';
// import React, { useState } from 'react';
import '../pages/Contact.css';
// import { useForm } from 'react-hook-form';

import React, { useState } from 'react';
import Form from '../form/Form';
// import './Cont2.css';

const Contact = () => {
  // const [name, setName] = useState('');
  // const [company, setCompany] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  // const isEmail = () => {
  //   let mail = document.getElementById('not-mail');
  //   let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  //   if (email.match(regex)) {
  //     mail.style.display = 'none';
  //     return true;
  //   } else {
  //     mail.style.display = 'block';
  //     mail.style.animation = 'dongle 1s';
  //     return false;
  //   }
  // };

  // const failMessage = () => {
  //   let formMess = document.querySelector('.form-message');
  //   formMess.innerHTML = 'please correct the input';
  //   formMess.style.opacity = '1';
  //   formMess.style.background = 'red';
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (name && isEmail() && message) {
  //     sendFeedback('portfolio', {
  //       name,
  //       company,
  //       phone,
  //       email,
  //       message,
  //     });
  //   } else {
  //     failMessage();
  //   }
  // };

  // const sendFeedback = (templateId, variables) => {
  //   window.emailjs
  //     .send('gmail', templateId, variables)
  //     .then((res) => {
  //       document.querySelector('.success').innerHTML =
  //         'message sent thank you.';

  //       setName('');
  //       setCompany('');
  //       setPhone('');
  //       setEmail('');
  //       setMessage('');
  //     })
  //     .catch(
  //       (err) =>
  //         (document.querySelector('.form-message').innerHTML =
  //           'error messgae failed please try again.')
  //     );
  // };

  // return (
  //   <section className='container contact section'>
  //     <div className='section-title contact-title'>
  //       <h2>contact</h2>
  //       <div className='underline'></div>
  //     </div>
  //     <form className='section-center'>
  //       <div className='success'></div>
  //       <div className='singleItem'>
  //         <label htmlFor='Name'>Name</label>
  //         <input
  //           type='text'
  //           id='name'
  //           name='name'
  //           onChange={(e) => setName(e.target.value)}
  //           placeholder='Name...'
  //           value={name}
  //           autoComplete='off'
  //         />
  //       </div>

  //       <div className='singleItem'>
  //         <label htmlFor='phone'>Phone Number</label>
  //         <input
  //           type='number'
  //           id='phone'
  //           name='phone'
  //           onChange={(e) => setPhone(e.target.value)}
  //           placeholder='Telephone...'
  //           value={phone}
  //         />
  //       </div>
  //       <div className='singleItem'>
  //         <label htmlFor='email'>Email</label>
  //         <input
  //           type='mail'
  //           id='email'
  //           name='email'
  //           onChange={(e) => setEmail(e.target.value)}
  //           placeholder='Email...'
  //           value={email}
  //           autoComplete='off'
  //         />
  //       </div>
  //       <div className='singleItem'>
  //         <label htmlFor='message'>Message</label>
  //         <textarea
  //           id='message'
  //           name='message'
  //           cols='30'
  //           rows='5'
  //           placeholder='Your Message . . .'
  //           value={message}
  //           onChange={(e) => setMessage(e.target.value)}
  //         />
  //       </div>
  //       <div className='singleItem'>
  //         <input
  //           className='btn form-btn'
  //           type='submit'
  //           value='send'
  //           onClick={handleSubmit}
  //         />
  //       </div>
  //       <div className='form-message'></div>
  //     </form>
  //   </section>
  // );

  return <Form />;
};

export default Contact;

// ------------------------------------------------------hook form

// function Contact() {
//   const [state, setstate] = useState('');
//   const { reset, register, handleSubmit, errors } = useForm({
//     mode: 'onSubmit',
//     // defaultValues: {
//     //   name: 'rrrrr',
//     //   email: 'ben@gamkkk.com',
//     //   message: 'kkkwkwk wnenjeieew  tttttttttttttttt fffwk',
//     // },
//   });

//   // --------------reset fun------------
//   const reSet = () => {
//     reset({
//       name: '',
//       lastname: '',
//       email: '',
//       phone: '',
//       message: '',
//     });
//   };
//   // ---------------reset end------------

//   const onSubmit = (e) => {
//     console.log(e);

//     sendFeedback('portfolio', {});
//   };

//   const sendFeedback = (templateId, variables) => {
//     window.emailjs
//       .send('gmail', templateId, variables)
//       .then((res) => {
//         console.log('success !');

//         // reSet();
//       })
//       .catch(
//         (err) =>
//           (document.querySelector('.form-message').innerHTML =
//             'error message not sent.')
//       );
//   };

//   return (
//     <section className='container contact section'>
//       <div className='section-title contact-title'>
//         <h2>contact</h2>
//         <div className='underline'></div>
//       </div>
//       <form onSubmit={handleSubmit(onSubmit)} className='section-center'>
//         <div className='singleItem'>
//           <label htmlFor='name'>Name</label>
//           <input
//             type='text'
//             name='name'
//             placeholder='Your Name . . .'
//             ref={register({ required: 'This is requird ' })}
//           />
//           {errors.name && <aside>{errors.name.message}</aside>}
//         </div>

//         <div className='singleItem'>
//           <label htmlFor='lastname'>Lastname</label>
//           <input
//             type='text'
//             name='lastname'
//             ref={register}
//             placeholder='Your Last Name . . .'
//           />
//         </div>

//         <div className='singleItem'>
//           <label htmlFor='email'>Email</label>
//           <input
//             type='email'
//             name='email'
//             ref={register({
//               required: 'Please input email',
//               minLength: { value: 13, message: 'Enter a valid email address' },
//             })}
//             placeholder='Your Email . . .'
//           />
//           {errors.email && <aside>{errors.email.message}</aside>}
//         </div>

//         <div className='singleItem'>
//           <label htmlFor='phone'>Your Number</label>
//           <input
//             type='number'
//             name='phone'
//             ref={register}
//             placeholder='Your Number (Optional)...'
//           />
//         </div>

//         <div className='textArea singleItem'>
//           <label htmlFor='message'>Message</label>
//           <textarea
//             name='message'
//             ref={register({
//               required: 'Please fill message input',
//               minLength: {
//                 value: 30,
//                 message: 'Message should be more than 30 characters',
//               },
//             })}
//             id=''
//             cols='30'
//             rows='5'
//             placeholder='Your Message . . .'
//           ></textarea>
//           {errors.message && <aside>{errors.message.message}</aside>}
//         </div>

//         <aside className='form-message'></aside>

//         <div className='btn form-btn'>
//           <button type='submit'>Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default Contact;

// ==============================================================

// export default class Form extends Component {
//   state = {
//     name: '',
//     lastname: '',
//     email: '',
//     message: '',
//     sent: false,
//     buttonText: 'Send Message',
//   };

//   // handle inputs

//   handleName = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   handleLastname = (e) => {
//     this.setState({
//       lastname: e.target.value,
//     });
//   };

//   handleEmail = (e) => {
//     this.setState({
//       email: e.target.value,
//     });
//   };

//   handleMessage = (e) => {
//     this.setState({
//       message: e.target.value,
//     });
//   };
//   handlePhone = (e) => {
//     this.setState({
//       phone: e.target.value,
//     });
//   };
//   // --------------------------email--------------
//   sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm('gmaill', 'portfolio', e.target, 'user_ziLsbi373uGctPkjIkv20')
//       .then(
//         (result) => {
//           return;
//           console.log(result.text, 'sucess');
//         },
//         (error) => {
//           console.log(error.text, 'error');
//           return <p>message not sent</p>;
//         }
//       );
//   }
//   // ----------------
//   // end of handle inputs

//   formSubmit = (e) => {
//     e.preventDefault();

//     let data = {
//       name: this.state.name,
//       lastname: this.state.lastname,
//       email: this.state.email,
//       message: this.state.message,
//     };
//   };

//   // for reseting the form data
//   resetForm = () => {
//     this.setState({
//       name: '',
//       lastname: '',
//       message: '',
//       email: '',
//       phone: '',
//     });

//     setTimeout(() => {
//       this.setState({
//         sent: false,
//       });
//     }, 3000);
//   };

//   render() {
//     return (
//       <section className='container contact section'>
//         <div className='section-title'>
//           <h2>contact</h2>
//           <div className='underline'></div>
//         </div>
//         <form onSubmit={this.sendEmail} className='section-center'>
//           <div className='singleItem'>
//             <label htmlFor='name'>Name</label>
//             <input
//               type='text'
//               name='name'
//               className='name'
//               value={this.state.name}
//               onChange={this.handleName}
//               placeholder='Your Name . . .'
//             />
//           </div>

//           <div className='singleItem'>
//             <label htmlFor='lastname'>Lastname</label>
//             <input
//               type='text'
//               name='lastname'
//               className='lastname'
//               value={this.state.lastname}
//               onChange={this.handleLastname}
//               placeholder='Your Last Name . . .'
//             />
//           </div>

//           <div className='singleItem'>
//             <label htmlFor='email'>Email</label>
//             <input
//               type='email'
//               name='email'
//               className='email'
//               value={this.state.email}
//               onChange={this.handleEmail}
//               placeholder='Your Email . . .'
//               required
//             />
//           </div>

//           <div className='singleItem'>
//             <label htmlFor='phone'>Your Number</label>
//             <input
//               type='number'
//               name='phone'
//               className='phone'
//               value={this.state.phone}
//               onChange={this.handlePhone}
//               placeholder='Your Number (Optional)...'
//               required
//             />
//           </div>

//           <div className='textArea singleItem'>
//             <label htmlFor='message'>Message</label>
//             <textarea
//               name='message'
//               value={this.state.message}
//               id=''
//               cols='30'
//               rows='5'
//               placeholder='Your Message . . .'
//               onChange={this.handleMessage}
//             ></textarea>
//           </div>

//           <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>
//             Message has been sent
//           </div>
//           <div className='btn form-btn'>
//             <button type='submit'>Submit</button>
//           </div>
//         </form>
//       </section>
//     );
//   }
// }
