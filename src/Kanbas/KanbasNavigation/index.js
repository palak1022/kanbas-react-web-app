// src/Kanbas/KanbasNavigation/index.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './index.css'; // Import the CSS file

function KanbasNavigation() {
  const links = [
    { label: "Account", path: "/Kanbas/Account", icon: "fas fa-user-circle" },
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: "fas fa-tachometer-alt" },
    { label: "Courses", path: "/Kanbas/Courses", icon: "fas fa-book account-icon" },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: "fas fa-calendar" },
    { label: "Inbox", path: "/Kanbas/Account", icon: "fas fa-inbox"  },
    { label: "History", path: "/Kanbas/Dashboard", icon: "fas fa-history"  },
    { label: "Studio", path: "/Kanbas/Courses", icon: "fas fa-cube" },
    { label: "Commons", path: "/Kanbas/Calendar",  icon: "fas fa-university"  },
    { label: "Help", path: "/Kanbas/Calendar", icon: "fas fa-question-circle" }
  ];

  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="col-lg-1 col-sm-1 col-md-1">
      <div className="sidebar">
        <ul className="no-bullets">
        {links.map((link, index) => (
  <li key={index} className={pathname.endsWith(link.path) ? "li-active" : ""}>
    <Link
      to={link.path}
      className={`account-link ${pathname.endsWith(link.path) ? "active-link" : ""}`}
      onClick={() => handleClick(link.path)}
    >
      <i className={link.icon}></i> {link.label}
    </Link>
  </li>
))}
        </ul>
      </div>
    </div>
  );
}

export default KanbasNavigation;
