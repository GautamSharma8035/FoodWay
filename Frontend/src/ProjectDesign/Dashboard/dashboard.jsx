import React, { useState, useEffect, useRef } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import './dashboard.css'; // Make sure to create and import a CSS file for styling

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle submenu visibility
  const toggleSubmenu = () => {
    setIsOpen(prevState => !prevState);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <div className='container-fluid'>
        <div className='container-fluid'>
        <IoReorderThreeOutline size={25} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      {isSidebarOpen && (
        <div className="sidebar" ref={sidebarRef}>
          <h2 className=" shadow-css-foodway">FoodWay</h2>
          <ul>
            <li>Dashboard</li>
            <li>Orders</li>
            <li>Menus</li>
              {/* Customers submenu */}
        <li>
          <details>
            <summary 
              onClick={toggleSubmenu}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
              <span>Customers</span>
              <span
                style={{
                  marginLeft: '10px',
                  transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease-in-out',
                  position:"relative",
                  left:"80px",
                 
                }}
              >
                &#x2771;
              </span>
            </summary>
            
            {isOpen && (
              <ul>
                <li>Add new</li>
                <li>Members</li>
                <li>General Customer</li>
              </ul>
            )}
            </details>
            </li>
            <li>Analytics</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Dashboard;
