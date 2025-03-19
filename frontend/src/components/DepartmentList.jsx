import { useEffect, useState } from "react";
import { getDepartments, deleteDepartment } from "../services/departmentService";
import DepartmentCard from "./DepartmentCard";

export default function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const data = await getDepartments();
    setDepartments(data);
  };

  const handleDelete = async (id) => {
    await deleteDepartment(id);
    fetchDepartments(); // Refresh list after delete
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Departments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept) => (
          <DepartmentCard key={dept.id} department={dept} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
