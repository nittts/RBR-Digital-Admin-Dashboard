"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { MdAdd } from "react-icons/md";

export default function EmployeesCreate() {
  const router = useRouter();

  const goToNew = () => router.push("/new");

  return (
    <Button
      minW="max-content"
      fontSize="0.9em"
      background="green.500"
      color="white"
      _hover={{ backgroundColor: "green.300" }}
      onClick={goToNew}
      leftIcon={<MdAdd fontSize="1.5em" />}
    >
      Criar novo funcionário
    </Button>
  );
}
