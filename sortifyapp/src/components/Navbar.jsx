import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const handleDeleteAccount = () => {
        localStorage.removeItem("user");
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
            <img src="/images/logo.png" alt="Algo Root Logo" className="logo-img" />
            <span className="project-name"> Sortify </span>
            </div>
            {user && (
                <div className="navbar-user">
                    <img
                     src="/images/icon.jpg"
                     alt="User Icon"
                     className="user-icon"
                     onClick={() => setDropdownOpen(!dropdownOpen)} />

                    {dropdownOpen && (
                        <div className="dropdown">
                            <p className="user-email">{user.email}</p>
                            
                            <button onClick={handleLogout} className="dropdown-btn">Logout</button>

                            <button onClick={handleDeleteAccount} className="dropdown-btn delete-btn">Delete Account</button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

