"use client";

import CreateEmployeeForm from "@/components/CreateEmployeeForm";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function EmployeeCreatePage() {
  const router = useRouter();

  const onSubmit = () => router.back();

  return (
    <Card shadow="lg" variant="outline">
      <CardHeader>Criar funcionário</CardHeader>
      <CardBody>
        <CreateEmployeeForm onSubmit={onSubmit} />
      </CardBody>
    </Card>
  );
}
