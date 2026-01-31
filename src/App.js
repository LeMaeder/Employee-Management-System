import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeeHome from "./Components/EmployeeHome";
import EmployeeDetail from "./Components/EmployeeDetail";

const STORAGE_KEY = "employees";

function App() {
  // Load synchronously on first render
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  // Save whenever employees changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  function addEmployee(employeeData) {
    const newEmployee = {
      EmployeeId: Date.now(),
      ...employeeData,
    };

    setEmployees((prev) => [newEmployee, ...prev]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <EmployeeHome employees={employees} onAddEmployee={addEmployee} />
          }
        />

        <Route
          path="/employees/:id"
          element={<EmployeeDetail employees={employees} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



