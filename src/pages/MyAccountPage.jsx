import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast,Toaster} from 'react-hot-toast'

const MyAccountPage = () => {
  const navigate = useNavigate();
  let session = useContext(UserContext);
  let phone = "yutuyt";
  const [userinfo, setuserinfo] = useState();
  const fetchuserdata = async () => {
    let id = session?.data?.id;
    let data1 = await axios.post("http://localhost:4500/getuserbyid", {
      id: id,
    });
    if (data1.data.status) {
      console.log(data1.data);
      phone = data1.data.data.phone;
      setuserinfo(data1.data.data);
    }
  };
  useEffect(() => {
    if (!session.status) {
      navigate("/");
    } else {
      fetchuserdata();
    }
  }, []);

  const [formData, setFormData] = useState({
    name: session?.data?.name,
    email: session?.data?.email,
    userid: session?.data?.id,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error("Error Occured Please try again Later");
    // Handle form submission
    //console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Toaster/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">My Account</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Information */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">User Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  User id
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.userid}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700"
              >
                Update Profile
              </button>
            </form>
          </div>

          {/* Enrolled Courses */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Enrolled Courses</h3>
            {userinfo?.enrolledcourses.length>0 ? (<div className="overflow-x-auto">
            
                <div className="flex space-x-4">
                  {userinfo?.enrolledcourses.map((course, index) => {
                    return (
                      <Link to={`/courses/${course._id.toString()}`} 
                        key={index}
                        className={
                          "bg-gray-100 p-4 shadow-md shadow-slate-400 m-2 rounded-lg w-60 flex-none"
                        }
                      >
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-32 object-cover rounded-t-lg mb-2"
                        />
                        <h4 className="text-xl font-bold">{course.title}</h4>
                        <p className="text-gray-700">{course.description}</p>
                      </Link>
                    );
                  })}
                </div>
              
            </div>): (
                <>
                <p className="text-red-500 font-sans font-semibold mb-4 ">You are not enrolled in any course</p>
                <Link to={'/courses'} className="bg-blue-500 px-4 py-2 rounded text-white">see all courses</Link>
                </>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccountPage;
