import { useState } from "react";
import { addDepartment } from "../services/departmentService";

export default function DepartmentForm({ onDepartmentAdded }) {
  const [department, setDepartment] = useState({
    name: "",
    location: "",
  });

  const handleChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDepartment(department);
    onDepartmentAdded(); // Refresh department list
    setDepartment({ name: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
      <input
        type="text"
        name="name"
        value={department.name}
        onChange={handleChange}
        placeholder="Department Name"
        className="border p-2 w-full mb-2"
        required
      />
      <input
        type="text"
        name="location"
        value={department.location}
        onChange={handleChange}
        placeholder="Location"
        className="border p-2 w-full mb-2"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700"
      >
        Add Department
      </button>
    </form>
  );
}
