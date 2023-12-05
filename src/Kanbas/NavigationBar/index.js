// KanbasNavigation.js
import React from 'react';

function KanbasNavigation({ activeItem }) {
  return (
    <div className="flont-start">
      <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li
            className="breadcrumb-item"
            style={{
              color: 'red',
              textDecoration: 'none',
              backgroundColor: activeItem === 'Dashboard' ? 'white' : 'transparent',
            }}
          >
            <a href="#" style={{ textDecoration: 'none', color: 'red' }}>
              Dashboard
            </a>
          </li>
         
        </ol>
      </nav>
      <div className="navigation-bar" style={{ backgroundColor: 'black' }}>
   
      </div>
    </div>
  );
}

export default KanbasNavigation;
