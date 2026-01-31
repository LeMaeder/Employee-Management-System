import React, { useState } from "react";
import "./EmployeeForm.css";

function EmployeeForm({ onAddEmployee }) {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    department: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (onAddEmployee) {
      onAddEmployee(formData);
    }

    setFormData({
      name: "",
      jobTitle: "",
      department: "",
      email: ""
    });
  }

  return (
    <div className="employee-form-container">
      <h2 className="employee-form-title">New Employee Form</h2>

      <form className="employee-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Job Title
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Department
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          disabled={!formData.name || !formData.jobTitle || !formData.email}
>
  Add Employee
</button>
      </form>
    </div>
  );
}

export default EmployeeForm;


