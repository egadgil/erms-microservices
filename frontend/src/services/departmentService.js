import axios from "axios";

const API_URL = "http://localhost:8082/departments"; // Backend endpoint

// 🔹 Fetch all departments
export const getDepartments = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching departments:", error);
    return [];
  }
};

// 🔹 Add a new department
export const addDepartment = async (department) => {
  try {
    const response = await axios.post(API_URL, department);
    return response.data;
  } catch (error) {
    console.error("Error adding department:", error);
  }
};

// 🔹 Delete a department
export const deleteDepartment = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting department:", error);
  }
};
