import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import "../styles/Sidebar.css";

const Sidebar = () => {
    const { logout } = useAuth();

    return (
        <div className="sidebar">
            <ul className="sidebar-menu">
                <li>
                    <Link to="/details">
                        <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li onClick={logout} className="logout">
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon logout-icon" />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;








// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes, faChartBar} from "@fortawesome/free-solid-svg-icons";
// import "../styles/Sidebar.css";
// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state

//     return (
//         <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//             {/* Sidebar Toggle Button */}
//             <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
//                 <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
//             </button>

//             {/* Sidebar Menu */}
//             <ul className="sidebar-menu">
//                 <li>
//                     <NavLink to="/details" activeClassName="active">
//                         <FontAwesomeIcon icon={faChartBar} className="menu-icon" /> 
//                         {isOpen && <span> Details</span>}
//                     </NavLink>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;


