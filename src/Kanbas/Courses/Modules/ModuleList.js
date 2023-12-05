import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div>
      <h3>Modules</h3>
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module) => (
            <li key={module.id} className="list-group-item">
              <h4>{module.name}</h4>
              <p>{module.description}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ModuleList;
