import { Employee } from "@/@types/employees.types";
import { EMPLOYEES_QUERY_ID } from "@/constants/queryKeys.constants";
import { createEmployee as createEmployeeSvc } from "@/services/employees";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateEmployee = () => {
  const queryClient = useQueryClient();

  const onSuccess = (newEmployee: Employee) => {
    queryClient.setQueriesData<Employee[]>({ queryKey: [EMPLOYEES_QUERY_ID] }, (oldData) => {
      if (oldData) return [...oldData, newEmployee];

      return [newEmployee];
    });
  };

  const {
    mutateAsync: createEmployee,
    status: createEmployeeStatus,
    error: createEmployeeError,
  } = useMutation({ mutationFn: createEmployeeSvc, onSuccess });

  return { createEmployee, createEmployeeStatus, createEmployeeError };
};

export default useCreateEmployee;
