import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import db from "../Database";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);

  return (
    <div>
      <h1>Course: {course?.name}</h1>
      <CourseNavigation />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href={`/courses/${courseId}`}>{course?.name}</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Modules
          </li>
        </ol>
      </nav>
      <div className="overflow-y-scroll position-fixed bottom-0 end-0">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<h1>Home</h1>} />
          <Route path ="Grades" element = {<h1>Grades</h1>}/>
        </Routes>
      </div>
    </div>
  );
}

export default Courses;
