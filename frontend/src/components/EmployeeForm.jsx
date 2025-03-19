import { useState } from "react";
import { addEmployee } from "../services/employeeService";

export default function EmployeeForm({ onEmployeeAdded }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    position: "",
    departmentId: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(employee);
    onEmployeeAdded();
    setEmployee({ name: "", email: "", position: "", departmentId: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        name="name"
        value={employee.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="email"
        name="email"
        value={employee.email}
        onChange={handleChange}
        placeholder="Email"
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="text"
        name="position"
        value={employee.position}
        onChange={handleChange}
        placeholder="Position"
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="number"
        name="departmentId"
        value={employee.departmentId}
        onChange={handleChange}
        placeholder="Department ID"
        className="border p-2 w-full mb-2"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Employee
      </button>
    </form>
  );
}

