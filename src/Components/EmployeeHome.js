import React from "react";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import "./EmployeeHome.css";

function EmployeeHome({ employees, onAddEmployee }) {
  return (
    <div className="employee-home">
      <EmployeeForm onAddEmployee={onAddEmployee} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default EmployeeHome;


