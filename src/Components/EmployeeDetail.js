import React from "react";
import { useParams, Link } from "react-router-dom";
import "./EmployeeDetail.css";

function EmployeeDetail({ employees }) {
  const { id } = useParams();

  const employee = employees.find((e) => String(e.EmployeeId) === String(id));

  if (!employee) {
    return (
      <div className="employee-detail">
        <h1>Employee Details</h1>
        <p>Employee not found.</p>
        <Link to="/employees">← Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div className="employee-detail">
      <h1>Employee Details</h1>

      <div className="employee-detail-card">
        <p>
  <strong>ID:</strong> EMP-{String(employee.EmployeeId).slice(-5)}
</p>
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>Job Title:</strong> {employee.jobTitle}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Email:</strong> {employee.email}</p>
      </div>

      <Link to="/">← Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetail;
