import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../Context/UserContext";

const CourseDetailsPage = () => {
  const session = useContext(UserContext);
  const [courseDetails, setcourseDetails] = useState();
  const [purchases, setpurchases] = useState(false);

  let { courseid } = useParams();
  const fetchcoursebyid = async () => {
    const data = await axios.post(`http://localhost:4500/getcoursebyid`, {
      id: courseid,
    });

    if (data.status) {
      setcourseDetails(data.data.data);
      //console.log(data.data.data);
    }
  };

  const chkcoursepurchasebyuser = async (cid) => {
    let data = await axios.post(`http://localhost:4500/veryfypurchasebyuser`, {
      id: session?.data?.id,
      cid: cid,
    });
    if (data?.data?.status) {
      console.log(data.data);
      setpurchases(data.data.status);
    }
  };
  useEffect(() => {
    if (session.status) chkcoursepurchasebyuser(courseid);
  }, []);

  useEffect(() => {
    fetchcoursebyid();
  }, []);

  //console.log(courseid);
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Overview */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <img
            src={courseDetails?.image || ""}
            alt={courseDetails?.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h2 className="text-3xl font-bold mb-4">{courseDetails?.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            {courseDetails?.description}
          </p>
        </div>

        {/* Course Content */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h3 className="text-2xl font-bold mb-4">Course Content</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            {courseDetails?.modules?.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>

        {/* Instructor Details */}
        <div className="bg-white p-8 shadow-lg rounded-lg mb-10">
          <h3 className="text-2xl font-bold mb-4">Instructor</h3>
          <div className="flex items-center mb-4">
            <img
              src={courseDetails?.instructor?.image || ""}
              alt={courseDetails?.instructor.name}
              className="w-20 h-20 object-cover rounded-full mr-4"
            />
            <div>
              <h4 className="text-xl font-bold">
                {courseDetails?.instructor.name}
              </h4>
              <p className="text-gray-700">{courseDetails?.instructor.bio}</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="flex justify-center space-x-4">
          {!purchases &&<Link
            to={`/checkout/${courseid}`}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700"
          >
            Enroll Now
          </Link>}
          {purchases &&<Link
            to={`/continuecourse/${courseid}`}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700"
          >
            Continue to course
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
