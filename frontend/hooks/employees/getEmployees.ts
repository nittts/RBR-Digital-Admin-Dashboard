"use client";

import { EmployeeFilters } from "@/@types/employees.types";
import { EMPLOYEES_QUERY_ID } from "@/constants/queryKeys.constants";
import { getEmployees } from "@/services/employees";
import { useQuery } from "@tanstack/react-query";

const useGetEmployees = (filters?: EmployeeFilters) => {
  const { data, status, error } = useQuery({
    queryKey: [EMPLOYEES_QUERY_ID, filters],
    queryFn: () => getEmployees(filters),
    initialData: [],
  });

  return {
    employees: data,
    getEmployeesStatus: status,
    getEmployeesError: error,
  };
};

export default useGetEmployees;
