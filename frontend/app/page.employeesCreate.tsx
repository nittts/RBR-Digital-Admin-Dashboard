"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function EmployeesCreate() {
  const router = useRouter();

  const goToNew = () => router.push("/new");

  return (
    <Button flex="auto" backgroundColor="green.500" _hover={{ backgroundColor: "green.300" }} onClick={goToNew}>
      Criar novo funcionário
    </Button>
  );
}
