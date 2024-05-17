import { EmployeePayload, Employee, EmployeeFilters, EditEmployeePayload } from "@/@types/employees.types";
import api from "./api";

const handleFilters = (filters?: EmployeeFilters) => {
  const params: Record<string, string | Date | undefined> = {};

  if (filters) {
    type FilterKeys = keyof typeof filters;
    const keys: FilterKeys[] = Object.keys(filters) as FilterKeys[];

    keys.forEach((key) => {
      if (filters[key]) {
        params[key] = filters[key];
      }
    });
  }

  return params;
};

export const getEmployees = async (filters?: EmployeeFilters): Promise<Employee[]> => {
  const response = await api.get("/api/employees", { params: handleFilters(filters) });

  return response.data;
};

export const getEmployeeById = async (id: string): Promise<Employee> => {
  const response = await api.get(`/api/employees/${id}`);

  return response.data;
};

export const createEmployee = async (payload: EmployeePayload): Promise<Employee> => {
  const response = await api.post("/api/employees", payload);

  return response.data;
};

export const editEmployee = async (payload: EditEmployeePayload): Promise<Employee> => {
  const { id, ...rest } = payload;

  const response = await api.put(`/api/employees/${id}`, rest);

  return response.data;
};
