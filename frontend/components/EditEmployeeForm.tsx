"use client";

import { useToast } from "@chakra-ui/react";

import { Employee, EmployeePayload } from "@/@types/employees.types";

import EmployeeForm from "./EmployeeForm";

import { useEditEmployee } from "@/hooks/employees";

export default function EditEmployeeForm({
  onSubmit,
  initialValues,
}: {
  onSubmit: () => void;
  initialValues: Employee;
}) {
  const toast = useToast();
  const { editEmployee, editEmployeeError, editEmployeeStatus } = useEditEmployee();

  const handleFormSubmit = async (payload: EmployeePayload) => {
    const promise = editEmployee({ ...payload, id: initialValues.id }).then(() => onSubmit());

    toast.promise(promise, {
      success: { title: "Sucesso", description: "Funcionário editado com sucesso", position: "bottom-left" },
      error: { title: "Erro", description: editEmployeeError, position: "bottom-left" },
      loading: { title: "Criando...", description: "Realizando edição do funcionário", position: "bottom-left" },
    });
  };

  return <EmployeeForm onFinish={handleFormSubmit} promiseStatus={editEmployeeStatus} initialValues={initialValues} />;
}
