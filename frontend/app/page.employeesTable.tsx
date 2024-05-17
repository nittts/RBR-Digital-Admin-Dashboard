"use client";

import { Employee } from "@/@types/employees.types";
import Table from "@/components/Table";
import { Departments } from "@/enums/deparments.enum";
import { Roles } from "@/enums/roles.enum";
import { useGetEmployees } from "@/hooks/employees";
import { departmentsToPt } from "@/mappers/departments";
import { rolesToPt } from "@/mappers/roles";
import { formatterUtils } from "@/utils/formatters";
import { Button, Flex } from "@chakra-ui/react";
import { useMemo } from "react";

const columns = [
  {
    key: "name",
    header: "Nome",
  },
  {
    key: "role",
    header: "Cargo",
    format: (role: Roles) => rolesToPt(role, true),
  },
  {
    key: "department",
    header: "Departamento",
    format: (department: Departments) => departmentsToPt(department, true),
  },
  {
    key: "admissionDate",
    header: "Data de admisssão",
    format: formatterUtils.formatDate,
  },
  {
    key: "actions",
    header: "Ações",
  },
];

export default function EmployeesTable() {
  const { employees } = useGetEmployees({});

  const rows = useMemo(
    () =>
      employees.map((employee: Employee) => ({
        ...employee,
        actions: (
          <Flex gap={2}>
            <Button background="blue.500" _hover={{ backgroundColor: "blue.300" }}>
              Editar
            </Button>
            <Button background="red.500" _hover={{ backgroundColor: "red.300" }}>
              Deletar
            </Button>
          </Flex>
        ),
      })),
    [employees]
  );

  return (
    <Table
      columns={columns}
      rows={rows}
      caption="Funcionários"
      variant="striped"
      colorScheme="blue"
      noDataMessage="Sem funcionários cadastrados"
      size="md"
    />
  );
}
