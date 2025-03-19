
import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/employeeService";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employees</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

