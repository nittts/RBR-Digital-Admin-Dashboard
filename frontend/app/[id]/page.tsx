"use client";

import { useGetEmployeeById } from "@/hooks/employees";
import { Button, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";

import EditEmployeeForm from "@/components/EditEmployeeForm";
import FetchResult from "@/components/FetchResult";

export default function EditEmployeePage() {
  const { id } = useParams();
  const { employee, getEmployeeError } = useGetEmployeeById(id as string);

  const router = useRouter();

  const onSubmit = () => router.back();

  if (getEmployeeError) {
    return (
      <>
        <FetchResult status="error" title="Erro buscando Funcionário!" description={getEmployeeError} />
        <Button colorScheme="blue" onClick={onSubmit}>
          Voltar
        </Button>
      </>
    );
  }

  if (!employee) {
    return (
      <>
        <FetchResult status="info" title="Buscando Funcionário..." description="Aguarde um instante" />
        <Button colorScheme="blue" onClick={onSubmit}>
          Voltar
        </Button>
      </>
    );
  }

  return (
    <Card shadow="lg" variant="outline">
      <CardHeader>Editar funcionário</CardHeader>
      <CardBody>
        <EditEmployeeForm onSubmit={onSubmit} initialValues={employee} />
      </CardBody>
    </Card>
  );
}
