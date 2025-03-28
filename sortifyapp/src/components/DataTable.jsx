import React, { useState, useEffect } from "react";
import mockData from "../api/mockData.json";
import "../styles/datatable.css";

const DataTable = () => {
    const [data, setData] = useState(mockData);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState({ key: "", ascending: true });
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    // Search functionality
    useEffect(() => {
        const filteredData = mockData.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setData(filteredData);
        setCurrentPage(1);
    }, [searchQuery]);

    // Sorting functionality
    const handleSort = (key) => {
        const ascending = sortOrder.key === key ? !sortOrder.ascending : true;
        const sortedData = [...data].sort((a, b) =>
            ascending ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key])
        );
        setData(sortedData);
        setSortOrder({ key, ascending });
    };

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const paginatedData = data.slice(indexOfFirstRow, indexOfLastRow);

    return (
        <div className="datatable-container">
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
            />

            {/* Data Table */}
            <table className="datatable">
                <thead>
                    <tr>
                        <th onClick={() => handleSort("name")}>
                            Name {sortOrder.key === "name" ? (sortOrder.ascending ? "▲" : "▼") : ""}
                        </th>
                        <th onClick={() => handleSort("email")}>
                            Email {sortOrder.key === "email" ? (sortOrder.ascending ? "▲" : "▼") : ""}
                        </th>
                        <th onClick={() => handleSort("occupation")}>
                            Occupation {sortOrder.key === "occupation" ? (sortOrder.ascending ? "▲" : "▼") : ""}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.occupation}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="no-data">No matching records found</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => setCurrentPage((prev) => (indexOfLastRow < data.length ? prev + 1 : prev))}
                    disabled={indexOfLastRow >= data.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataTable;

