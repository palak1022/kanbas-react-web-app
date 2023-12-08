import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  const editCourse = (selectedCourse) => {
    setCourse(selectedCourse);
  };

  return (
    <>
      <div className={'d-none d-md-block'}>
        <div className={'fs-1'}>Dashboard</div>
        <hr />
      </div>
      <h3>Published courses ({courses.length})</h3>

      {/* Form to edit course state variables */}
      <div>
        <h5>Course</h5>
        <input
          name="name"
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          name="number"
          value={course.number}
          className="form-control"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          name="startDate"
          value={course.startDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          name="endDate"
          value={course.endDate}
          className="form-control"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button onClick={addNewCourse}>Add</button>
        <button onClick={updateCourse}>Update</button>
      </div>

      {/* Displaying existing courses */}
      <div className="list-group">
        {courses.map((c) => (
          <div key={c._id} className="list-group-item">
            <button onClick={() => editCourse(c)} style={{ marginRight: '8px' }}>
              Edit
            </button>
            <button onClick={() => deleteCourse(c._id)}>Delete</button>
            <Link to={`/Kanbas/Courses/${c._id}`}>{c.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;
