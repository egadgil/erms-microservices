
import axios from "axios";

const API_URL = "http://localhost:8081/employees";

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
};

export const addEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(\`\${API_URL}/\${id}\`);
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
};

