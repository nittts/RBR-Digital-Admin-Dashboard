import { EmployeeFilters } from "@/@types/employees.types";
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

export const getEmployees = async (filters?: EmployeeFilters) => {
  const response = await api.get("/api/employees", { params: handleFilters(filters) });

  return response.data;
};
