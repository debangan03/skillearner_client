import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CoursesPage = () => {
  const fetchCourses = async () => {
    let courses = await axios.get("http://localhost:4500/getallcourses");
    if (courses.status) {
      setcourses(courses.data.data);
    }
  };
  const [courses, setcourses] = useState({});

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(courses).map((course, index) => {
            //console.log(course);
            let id= course._id.toString();
            return (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {course.description}
                </p>
                <div className="flex justify-start items-center space-x-2 ">
                  <Link
                    to={`/courses/${id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 my-2 rounded"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/checkout/${id}`}
                    className="bg-emerald-500 hover:bg-emerald-700 text-white px-4 py-2 my-2 rounded"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
