import React, { useState, useEffect, useRef } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import './sidenav.css';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Sidenav({ isOpen, setIsOpen, functionUse }) {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');
    const sidebarRef = useRef(null);
    const order = useNavigate();

    const toggleSubmenu = () => {
        setIsSubmenuOpen(prevState => !prevState);
    };

    const dashboardnavigate = () => {
        order('/dashboard');
    };

    const contactUs = () => {
        order('/contact');
    };

    const ordernavigate = () => {
        order('/orderpage');
    };

    const analyticnavigate = () => {
        order('/analytics');
    };

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
        sessionStorage.setItem('activeItem', item); // Local Storage se Session Storage me shift kiya
    };

    useEffect(() => {
        const storedActiveItem = sessionStorage.getItem('activeItem');
        if (storedActiveItem) {
            setActiveItem(storedActiveItem);
        }

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
            <div className="toggle-btn" onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
                {isOpen ? <RxCross2 size={25} /> : <IoReorderThreeOutline size={25} />}
            </div>

            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <>
                        <h2 className="shadow-css-foodway mt-3">FoodWay</h2>
                        <ul>
                            <li className={activeItem === 'dashboard' ? 'active' : ''} onClick={() => { handleItemClick('dashboard'); dashboardnavigate(); }}>
                                Dashboard
                            </li>
                            <li className={activeItem === 'orders' ? 'active' : ''} onClick={() => { handleItemClick('orders'); ordernavigate(); }}>
                                Orders
                            </li>
                            <li className={activeItem === 'menus' ? 'active' : ''} onClick={() => handleItemClick('menus')}>
                                Menus
                            </li>
                            <li className={activeItem === 'analytics' ? 'active' : ''} onClick={() => { handleItemClick('analytics'); analyticnavigate(); }}>
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
                                <span className="card-title" style={{ wordWrap: "break-word", fontSize: "17px" }}>
                                    Organize your menus <br />through button below
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
                                color: "white",
                            }} onClick={contactUs}>
                            Contact Us
                        </button><br />

                        <button className="btn btn-light mt-3 fw-bold w-100"
                            style={{
                                background: "linear-gradient(to right, #6366F1, #8B5CF6)",
                                borderRadius: "10px",
                                transition: "all 0.3s ease",
                                color: "white",
                            }}>
                            Log Out
                        </button>
                    </>
                )}
            </div>
            <footer />
        </div>
    );
}

export default Sidenav;
