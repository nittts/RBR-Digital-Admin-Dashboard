"use client";

import { EmployeeFilters } from "@/@types/employees.types";
import { EMPLOYEES_QUERY_ID } from "@/constants/queryKeys.constants";
import { getEmployees } from "@/services/employees";
import { formatterUtils } from "@/utils/formatters";
import { useQuery } from "@tanstack/react-query";

const useGetEmployees = (filters?: EmployeeFilters) => {
  const { data, status, error } = useQuery({
    queryKey: [EMPLOYEES_QUERY_ID, filters],
    queryFn: () => getEmployees(filters),
  });

  return {
    employees: data,
    getEmployeesStatus: status,
    getEmployeesError: formatterUtils.formatError(error),
  };
};

export default useGetEmployees;
