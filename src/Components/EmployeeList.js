import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeList.css";

function EmployeeList({ employees }) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("name"); // name | department | jobTitle

  const filteredAndSorted = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = !q
      ? employees
      : employees.filter((e) => {
          const haystack = `${e.name} ${e.jobTitle} ${e.department} ${e.email}`.toLowerCase();
          return haystack.includes(q);
        });

    const sorted = [...filtered].sort((a, b) => {
      const aVal = (a[sortBy] || "").toString().toLowerCase();
      const bVal = (b[sortBy] || "").toString().toLowerCase();
      return aVal.localeCompare(bVal);
    });

    return sorted;
  }, [employees, query, sortBy]);

  return (
    <div className="employee-list">
      <h1>Employee List</h1>

      <div className="employee-list-controls">
        <input
          type="text"
          placeholder="Search name, title, dept, email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="jobTitle">Sort by Job Title</option>
          <option value="department">Sort by Department</option>
        </select>
      </div>

      {(!employees || employees.length === 0) ? (
        <p className="empty-message">
          No employees have been added yet. Use the form above to get started.
        </p>
      ) : filteredAndSorted.length === 0 ? (
        <p className="empty-message">
          No matches found. Try a different search.
        </p>
      ) : (
        <ul>
          {filteredAndSorted.map((employee) => (
            <li key={employee.EmployeeId}>
              <Link to={`/employees/${employee.EmployeeId}`}>
                {employee.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;

