import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModuleList() {
  const { courseId } = useParams();
  const [modules, setModules] = useState(db.modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });

  const addModule = () => {
    setModules([
      ...modules,
      { ...module, _id: new Date().getTime().toString() }
    ]);
  };

  const deleteModule = (moduleId) => {
    setModules(modules.filter((mod) => mod._id !== moduleId));
  };

  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m._id === module._id) {
          return module;
        } else {
          return m;
        }
      })
    );
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={addModule}>Add</button>
        <button onClick={updateModule}>Update</button>
        ...
      </li>
      {modules
        .filter((mod) => mod.course === courseId)
        .map((mod, index) => (
          <li key={index} className="list-group-item">
            <button onClick={() => setModule(mod)}>Edit</button>
            <button onClick={() => deleteModule(mod._id)}>Delete</button>
            <h3>{mod.name}</h3>
            <p>{mod.description}</p>
            <p>{mod._id}</p>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
