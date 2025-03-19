export default function EmployeeCard({ employee, onDelete }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{employee.name}</h2>
      <p className="text-gray-600">{employee.position}</p>
      <p className="text-gray-500">{employee.email}</p>
      <button
        onClick={() => onDelete(employee.id)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}

