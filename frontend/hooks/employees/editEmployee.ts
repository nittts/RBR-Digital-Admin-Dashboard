import { Employee } from "@/@types/employees.types";
import { EMPLOYEES_QUERY_ID } from "@/constants/queryKeys.constants";
import { editEmployee as editEmployeeSvc } from "@/services/employees";
import { formatterUtils } from "@/utils/formatters";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditEmployee = () => {
  const queryClient = useQueryClient();

  const onSuccess = (editedEmployee: Employee) => {
    queryClient.setQueriesData<Employee[]>({ queryKey: [EMPLOYEES_QUERY_ID] }, (oldData) => {
      if (oldData)
        return oldData.map((employee) => {
          return employee.id === editedEmployee.id ? editedEmployee : employee;
        });

      return [editedEmployee];
    });
  };

  const { mutateAsync, status, error } = useMutation({ mutationFn: editEmployeeSvc, onSuccess });

  return {
    editEmployee: mutateAsync,
    editEmployeeStatus: status,
    editEmployeeError: formatterUtils.formatError(error),
  };
};

export default useEditEmployee;
