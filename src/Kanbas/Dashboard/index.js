import React from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import KanbasNavigation from "../KanbasNavigation";
import "./dashboard.css";

function Dashboard() {
  // Enclose the content within parentheses to be executed
  return (
    <div>
      {/* Rendering the KanbasNavigation component */}
      
      <h5>
        <b>Dashboard</b>
      </h5>
      <hr />
      <div className="row">
        <h6>
          <b>Published Courses (24)</b>
        </h6>
      </div>
      <hr />
      <div className="row">
        {/* Mapping over courses and rendering cards */}
        {db.courses.map((course) => (
          <div
            key={course._id}
            className="card"
            style={{
              width: "250px",
              alignContent: "left",
              margin: "10px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            <Link
              to={`/Kanbas/Courses/${course._id}`}
              style={{ textDecoration: "none" }}
            >
              <img
                className="card-img-top"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                alt="Card cap"
                style={{ width: "250px", height: "200px", paddingLeft: "0px" }}
              />
              <div className="card-body">
                <h8 className="card-title" style={{ color: "blue" }}>
                  {course.number} {course.name}
                </h8>
                <p
                  className="card-text"
                  style={{ color: "grey", paddingBottom: "5px" }}
                >
                  {course.number}.{course.section}.{course.term}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
