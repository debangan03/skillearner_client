import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import axios from 'axios';
import {toast,Toaster} from 'react-hot-toast'
const ForgotPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit =async(e) => {
    e.preventDefault();
    // Handle form submission
    //setMessage('If this email is registered, you will receive a password reset link.');

    let {data:{resetLink}}=await axios.post('https://skillearner-server-1.onrender.com/forgotpassword',{
      email: email,
    })
    if(resetLink){
      const templateParams = {
        user_email: email,
        reset_link: resetLink,
      };
  
      emailjs.send(
        "service_bjf5iyo",
        "template_iofvomb",
        templateParams,
        "ZDSwHuB0r7LC8Fwk-"
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success("mail sent successfully");
          setMessage('Password reset email sent successfully');
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    }
  };

  return (
    <div className="min-h-screen flex  lg:items-center justify-center bg-gray-100 py-10">
      <div className="max-w-md w-full mt-10 lg:mt-0  p-8  ">
        <Toaster/>
        <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
        <form className='border-blue-900 border p-4 rounded-md' onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-2 border-gray-400  rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">Send Reset Link</button>
        </form>
        {message && (
          <p className="text-green-500 text-center mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPage;
