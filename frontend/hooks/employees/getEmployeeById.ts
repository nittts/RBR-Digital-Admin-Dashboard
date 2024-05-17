"use client";

import { EMPLOYEES_QUERY_ID } from "@/constants/queryKeys.constants";
import { getEmployeeById } from "@/services/employees";
import { formatterUtils } from "@/utils/formatters";
import { useQuery } from "@tanstack/react-query";

const useGetEmployeeById = (id: string) => {
  const { data, status, error } = useQuery({
    queryKey: [EMPLOYEES_QUERY_ID, id],
    queryFn: () => getEmployeeById(id),
    enabled: !!id,
    retry: false,
  });

  return {
    employee: data,
    getEmployeeStatus: status,
    getEmployeeError: formatterUtils.formatError(error),
  };
};

export default useGetEmployeeById;
