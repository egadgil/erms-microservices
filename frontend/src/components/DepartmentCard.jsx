export default function DepartmentCard({ department, onDelete }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{department.name}</h2>
      <p className="text-gray-600">{department.location}</p>
      <button
        onClick={() => onDelete(department.id)}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}
