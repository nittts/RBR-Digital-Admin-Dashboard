"use client";

import { useToast } from "@chakra-ui/react";

import { EmployeePayload } from "@/@types/employees.types";
import { useCreateEmployee } from "@/hooks/employees";

import EmployeeForm from "./EmployeeForm";

export default function CreateEmployeeForm({ onSubmit }: { onSubmit: () => void }) {
  const toast = useToast();
  const { createEmployee, createEmployeeError, createEmployeeStatus } = useCreateEmployee();

  const handleFormSubmit = async (payload: EmployeePayload) => {
    const promise = createEmployee(payload).then(() => onSubmit());

    toast.promise(promise, {
      success: { title: "Sucesso", description: "Funcionário criado com sucesso", position: "bottom-left" },
      error: { title: "Erro", description: createEmployeeError, position: "bottom-left" },
      loading: { title: "Criando...", description: "Realizando cadastro do funcionário", position: "bottom-left" },
    });
  };

  return <EmployeeForm onFinish={handleFormSubmit} promiseStatus={createEmployeeStatus} />;
}
