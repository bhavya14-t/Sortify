import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";
import "../styles/Details.css";

const Details = () => {
    return (
        <div className="details-page">
            <Navbar />
            <div className="details-container">
                <Sidebar />
                <div className="details-content">
                    <h2 className="details-title"> User Details</h2>
                    <div className="table-container">
                        <DataTable />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
