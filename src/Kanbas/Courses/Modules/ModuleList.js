import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modules.modules); // Accessing 'modules' state from Redux
  const module = useSelector((state) => state.modules.module); // Accessing 'module' state from Redux
  const dispatch = useDispatch();

  const handleAddModule = () => {
    dispatch(addModule({ ...module, course: courseId }));
  };

  const handleDeleteModule = (moduleId) => {
    dispatch(deleteModule(moduleId));
  };

  const handleUpdateModule = () => {
    dispatch(updateModule(module));
  };

  const handleSetModule = (selectedModule) => {
    dispatch(setModule(selectedModule));
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={handleAddModule}>Add</button>
        <button onClick={handleUpdateModule}>Update</button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>
      {modules
        .filter((mod) => mod.course === courseId)
        .map((mod, index) => (
          <li key={index} className="list-group-item">
            <button onClick={() => handleSetModule(mod)}>Edit</button>
            <button onClick={() => handleDeleteModule(mod._id)}>Delete</button>
            <h3>{mod.name}</h3>
            <p>{mod.description}</p>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
