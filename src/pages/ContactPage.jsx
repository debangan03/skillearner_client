import React, { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';

const ContactPage = () => {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlesubmit=(e)=>{
    e.preventDefault();
    if(!formdata.name || !formdata.email|| !formdata.message){
      alert('please fill all the fields');
      return;
    }
    //console.log(formdata);
    //setFormdata()
 

  }
  return (
    <div className="min-h-screen flex  lg:items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full lg:mt-0 mt-10 bg-white border-2 border-blue-300 mx-4 p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handlesubmit}> 
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
         
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              rows="5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
