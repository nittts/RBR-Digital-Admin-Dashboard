import { Button } from "@chakra-ui/react";

export default function EmployeesCreate() {
  return (
    <Button flex="auto" backgroundColor="green.500" _hover={{ backgroundColor: "green.300" }}>
      Criar novo funcionário
    </Button>
  );
}
