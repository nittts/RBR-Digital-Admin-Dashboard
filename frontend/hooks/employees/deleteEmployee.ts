import { Employee } from "@/@types/employees.types";
import { EMPLOYEES_QUERY_ID } from "@/constants/queryKeys.constants";
import { deleteEmployee as deleteEmployeeSvc } from "@/services/employees";
import { formatterUtils } from "@/utils/formatters";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteEmployee = () => {
  const queryClient = useQueryClient();

  const onSuccess = (deletedEmployee: Employee) => {
    queryClient.setQueriesData<Employee[]>({ queryKey: [EMPLOYEES_QUERY_ID] }, (oldData) => {
      if (oldData) {
        return oldData.filter((employee) => employee.id !== deletedEmployee.id);
      }

      return [];
    });
  };

  const { mutateAsync, status, error } = useMutation({
    mutationFn: deleteEmployeeSvc,
    onSuccess,
    onError: (error) => console.log(error),
  });

  return {
    deleteEmployee: mutateAsync,
    deleteEmployeeStatus: status,
    deleteEmployeeError: formatterUtils.formatError(error),
  };
};

export default useDeleteEmployee;
