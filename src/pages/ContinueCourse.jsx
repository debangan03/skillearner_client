import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import axios from "axios";
import UserContext from "../Context/UserContext";

const ContinueCourse = () => {
    let x;
  const session = useContext(UserContext);
  const [course, setCourse] = useState(null);
  const [purchases, setPurchases] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [videourl, setvideourl] = useState("")
  let { courseId } = useParams();

  const fetchCourseById = async () => {
    const data = await axios.post(`http://localhost:4500/getcoursebyid`, {
      id: courseId,
    });

    if (data.status) {
        setvideourl(data.data.data?.modules[0]?.video)
      setCourse(data.data.data);
    }
  };

  const chkCoursePurchaseByUser = async (cid) => {
    let data = await axios.post(`http://localhost:4500/veryfypurchasebyuser`, {
      id: session?.data?.id,
      cid: cid,
    });
    if (data?.data?.status) {
      setPurchases(data.data.status);
    }
  };
  const changecourse=(ind)=>{
    x=(x+1);
    console.log(ind);
    setvideourl(course.modules[ind]?.video);
    console.log(videourl);
  }

  useEffect(() => {
    if (session.status) chkCoursePurchaseByUser(courseId);
  }, [session, courseId]);

  useEffect(() => {
    fetchCourseById();
  }, [courseId]);

  return (
    <>
      {purchases && (
        <div className="flex flex-col md:flex-row h-screen">
          <div className="flex-1 flex flex-col items-center justify-center bg-gray-100 px-4 py-2">
            <div className="w-full -mt-4 text-center ">
              <h1 className="text-2xl font-bold">{course?.title}</h1>
              <p className="text-gray-600 text-lg ">
                {course?.description}
              </p>
            </div>
            <div className="w-full max-w-4xl">
              <ReactPlayer 
              key={x}
                url={videourl}
                controls
                width="100%"
                height="auto"
                style={{ aspectRatio: "16/9" }}
              />
            </div>
          </div>
          <div className="md:hidden p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {isSidebarOpen ? "Close Course Content" : "Open Course Content"}
            </button>
          </div>
          <div
            className={`${
              isSidebarOpen ? "block" : "hidden"
            } md:block w-full md:w-1/3 bg-white border-l border-gray-200 p-4 overflow-y-auto`}
          >
            <h2 className="text-xl font-semibold mb-4">Course Progress</h2>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${course?.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4">Course Content</h2>
            {course?.modules?.map((module, index) => (
              <div key={index} className="mb-4 relative bg-blue-100 rounded p-2">
                <h3 className="text-lg font-semibold">{module?.title}</h3>
                <p className="text-sm text-gray-500">Duratio : {module?.duration}</p>
                <button className="bg-blue-500 text-white hover:scale-90 duration-500 absolute top-3 rounded p-2 right-2" onClick={()=>{changecourse(index)}}>Learn</button>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ContinueCourse;
