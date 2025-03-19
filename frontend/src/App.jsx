import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import DepartmentList from "./components/DepartmentList";
import DepartmentForm from "./components/DepartmentForm";
import { useState } from "react";

export default function App() {
  const [refreshEmployees, setRefreshEmployees] = useState(false);
  const [refreshDepartments, setRefreshDepartments] = useState(false);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Employee & Department Management</h1>

      <div className="max-w-lg mx-auto mb-6">
        <EmployeeForm onEmployeeAdded={() => setRefreshEmployees(!refreshEmployees)} />
      </div>
      <EmployeeList key={refreshEmployees} />

      <div className="max-w-lg mx-auto mt-10 mb-6">
        <DepartmentForm onDepartmentAdded={() => setRefreshDepartments(!refreshDepartments)} />
      </div>
      <DepartmentList key={refreshDepartments} />
    </div>
  );
}
