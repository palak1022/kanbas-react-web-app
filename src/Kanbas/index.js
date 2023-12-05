import React from "react";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

import Nav from "../Nav";
import Courses from "./Courses";
function Kanbas() {
 return (
   <div>
      <div className="d-flex">
      <KanbasNavigation />
     <Nav/>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses" element = { <Courses/>}/>
        </Routes>
   </div>
   </div>
   
 )
}
export default Kanbas