import React, { useState, useEffect, useRef } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import './sidenav.css'
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Sidenav({ isOpen, setIsOpen }) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("dashboard");
    const sidebarRef = useRef(null);
    const order = useNavigate();

    const toggleSubmenu = () => {
        setIsSubmenuOpen(prevState => !prevState);
    };

    const ordernavigate =()=>{
        order('/orderpage')
    }
    const analyticnavigate = ()=>{
        order('/analytics')
    }

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="sidenav-container" ref={sidebarRef}>
            <div className="toggle-btn" onClick={toggleSidebar}
                style={{ cursor: 'pointer' }} >
                {isOpen === false ? <IoReorderThreeOutline
                    size={25} /> : <RxCross2 size={25} />}
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <>
                        <h2 className="shadow-css-foodway mt-3">FoodWay</h2>
                        <ul>
                            <li
                                className={activeItem === 'dashboard' ? 'active' : ''}
                                onClick={() => handleItemClick('dashboard')}
                            >
                                Dashboard
                            </li>
                            <li
                                className={activeItem === 'orders' ? 'active' : ''}
                                onClick={() => {handleItemClick('orders'),ordernavigate()}}
                            >
                                Orders
                            </li>
                            <li
                                className={activeItem === 'menus' ? 'active' : ''}
                                onClick={() => handleItemClick('menus')}
                            >
                                Menus
                            </li>
                            <li>
                                <details>
                                    <summary
                                        onClick={toggleSubmenu}
                                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                                        className={activeItem === 'customers' ? 'active' : ''}
                                    >
                                        <span onClick={() => handleItemClick('customers')}>Customers</span>
                                        <span
                                            style={{
                                                marginLeft: '10px',
                                                transform: isSubmenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s ease-in-out',
                                                marginLeft: 'auto'
                                            }}
                                        >
                                            &#x2771;
                                        </span>
                                    </summary>

                                    {isSubmenuOpen && (
                                        <ul>
                                            <li
                                                className={activeItem === 'add-new' ? 'active' : ''}
                                                onClick={() => handleItemClick('add-new')}
                                            >
                                                Add new
                                            </li>
                                            <li
                                                className={activeItem === 'members' ? 'active' : ''}
                                                onClick={() => handleItemClick('members')}
                                            >
                                                Members
                                            </li>
                                            <li
                                                className={activeItem === 'general' ? 'active' : ''}
                                                onClick={() => handleItemClick('general')}
                                            >
                                                General Customer
                                            </li>
                                        </ul>
                                    )}
                                </details>
                            </li>
                            <li
                                className={activeItem === 'analytics' ? 'active' : ''}
                                onClick={() => {handleItemClick('analytics'), analyticnavigate()}}
                            >
                                Analytics
                            </li>


                        </ul>
                       
                        <div className="menu-card-container d-flex justify-content-center align-items-center mt-5">
                            <div className="card text-white p-2 shadow-lg menu-card d-flex flex-column flex-nowrap"
                                style={{
                                    width: "250px",
                                    borderRadius: "20px",
                                    background: "linear-gradient(to right, #6366F1, #8B5CF6)",
                                    textAlign: "center"
                                }}
                            >
                                <span className="card-title" style={{ wordWrap: "break-word", fontSize:"17px"}}>
                                    Organize your menus <br/>through button below
                                </span>
                                <button className="btn btn-light mt-3 fw-bold w-100"
                                    style={{
                                        borderRadius: "10px",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    + Add Menus
                                </button>
                            </div>
                            
                        </div>
                        <button className="btn btn-light mt-3 fw-bold w-100"
                                    style={{
                                        background: "linear-gradient(to right, #6366F1, #8B5CF6)",
                                        borderRadius: "10px",
                                        transition: "all 0.3s ease",
                                        color:"white",
                                    }}>
                                    Contact Us
                                </button><br/>
                        <button className="btn btn-light mt-3 fw-bold w-100"
                                    style={{
                                        background: "linear-gradient(to right, #6366F1, #8B5CF6)",
                                        borderRadius: "10px",
                                        transition: "all 0.3s ease",
                                        color:"white",
                                    }}>
                                    Log Out
                                </button>
                    </>
                )}

            </div>
            <footer/>
        </div>
      
    );
}

export default Sidenav;
