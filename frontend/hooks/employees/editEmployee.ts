import { Employee } from "@/@types/employees.types";
import { EMPLOYEES_QUERY_ID } from "@/constants/queryKeys.constants";
import { editEmployee as editEmployeeSvc } from "@/services/employees";
import { formatterUtils } from "@/utils/formatters";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditEmployee = () => {
  const queryClient = useQueryClient();

  const onSuccess = (editedEmployee: Employee) => {
    queryClient.setQueriesData<Employee[]>({ queryKey: [EMPLOYEES_QUERY_ID] }, () => {
      return [editedEmployee];
    });
  };

  const { mutateAsync, status, error } = useMutation({
    mutationFn: editEmployeeSvc,
    onSuccess,
    onError: (error) => console.log(error),
  });

  return {
    editEmployee: mutateAsync,
    editEmployeeStatus: status,
    editEmployeeError: formatterUtils.formatError(error),
  };
};

export default useEditEmployee;
