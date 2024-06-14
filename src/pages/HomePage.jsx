import axios from "axios";
import React, { useEffect, useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Context/UserContext";


const HomePage = () => {
  const session = useContext(UserContext);
  const [featuredCourses, setfeaturedCourses] = useState({});
  const fetchCourses = async () => {
    let courses = await axios.get("https://skillearner-server-1.onrender.com/getallcourses");
    if (courses.status) {
      setfeaturedCourses(courses.data.data);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-950 text-white py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Skill Earner</h1>
          <p className="text-lg mb-8">
            Empowering you with the skills needed to excel in the modern world.
          </p>
          <a
            href="#courses"
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full"
          >
            Explore Courses
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Skill Earner?</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          At Skill Earner, we offer a wide range of courses designed by industry
          experts to help you achieve your personal and professional goals.
          Whether you're looking to advance in your career, learn a new hobby,
          or simply expand your knowledge, we have something for everyone.
        </p>
      </div>

      {/* Featured Courses Section */}
      <div
        id="courses"
        className="mx-auto max-w-7xl flex flex-col justify-center"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Courses
        </h2>
  
        <div className="overflow-x-auto z-10 no-scrollbar">
              <div className="flex space-x-4">
                {Object.values(featuredCourses)?.map((course, index) => (
                  <Link to={`/courses/${course._id.toString()}`} key={index} className="hover:scale-105 duration-500 bg-gray-100 p-4 shadow-md m-4 shadow-slate-300 w-96 rounded-lg flex-none">
                    <img src={course.image} alt={course.title} className="w-full h-44 object-cover rounded-t-lg mb-2"/>
                    <h4 className="text-xl font-bold">{course.title}</h4>
                    <p className="text-gray-700">{(course.description).slice(0,80)} ...</p>
                    <span className="text-lg text-red-400 font-semibold ">Price  - ₹ {course.price}</span>
                    
                  </Link>
                ))}
              </div>
            </div>
        <Link
          to={"/courses"}
          className="rounded  font-bold hover:bg-blue-600 text-center my-6 p-4 text-white bg-blue-500 mx-auto"
        >
          See All Courses
        </Link>
      </div>

      {/* Call-to-Action Section */}
      {!session?.status && <div className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg mb-8">
            Join Skill Earner today and unlock your potential!
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full"
          >
            Sign Up Now
          </Link>
        </div>
      </div>}
    </div>
  );
};

export default HomePage;
