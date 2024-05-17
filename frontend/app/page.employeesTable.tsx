"use client";

import { Employee, EmployeeFilters } from "@/@types/employees.types";
import { Columns } from "@/@types/table.types";
import DeleteButton from "@/components/DeleteButton";
import DepartmentTag from "@/components/DepartmentTag";
import RoleTag from "@/components/RoleTag";
import Table from "@/components/Table";
import { Departments } from "@/enums/deparments.enum";
import { Roles } from "@/enums/roles.enum";
import { useDeleteEmployee, useGetEmployees } from "@/hooks/employees";
import { departmentsToPt } from "@/mappers/departments";
import { rolesToPt } from "@/mappers/roles";
import { formatterUtils } from "@/utils/formatters";
import { Button, Flex, OrderedList, useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

type EmployeesTableProps = {
  filters: EmployeeFilters;
};

const columns: Columns[] = [
  {
    key: "name",
    header: "Nome",
  },
  {
    key: "role",
    header: "Cargo",
    format: (role: Roles) => <RoleTag tag={role} />,
  },
  {
    key: "department",
    header: "Departamento",
    format: (department: Departments) => <DepartmentTag tag={department} />,
  },
  {
    key: "admissionDate",
    header: "Data de admisssão",
    format: formatterUtils.formatDate,
  },
  {
    key: "actions",
    header: "Ações",
    disableOrder: false,
  },
];

export default function EmployeesTable({ filters }: EmployeesTableProps) {
  const { employees, getEmployeesStatus } = useGetEmployees(filters);
  const { deleteEmployee, deleteEmployeeError } = useDeleteEmployee();

  const toast = useToast();
  const router = useRouter();

  const handleDeleteEmployee = useCallback(
    (id: string) => {
      toast.promise(deleteEmployee(id), {
        success: { title: "Sucesso", description: "Funcionário criado com sucesso", position: "bottom-left" },
        error: { title: "Erro", description: deleteEmployeeError, position: "bottom-left" },
        loading: { title: "Criando...", description: "Realizando cadastro do funcionário", position: "bottom-left" },
      });
    },
    [deleteEmployee, deleteEmployeeError, toast]
  );

  const rows = useMemo(
    () =>
      employees?.map((employee: Employee) => ({
        ...employee,
        actions: (
          <Flex gap={2}>
            <Button
              background="blue.500"
              _hover={{ backgroundColor: "blue.300" }}
              onClick={() => router.push(`/${employee.id}`)}
              color="white"
            >
              Editar
            </Button>
            <DeleteButton
              onConfirm={() => handleDeleteEmployee(employee.id)}
              trigger="Deletar"
              header="Cuidado!"
              description="Essa ação irá remover este funcionário permanentemente."
            />
          </Flex>
        ),
      })),
    [employees, router, handleDeleteEmployee]
  );

  return (
    <Table
      columns={columns}
      rows={rows || []}
      caption="Funcionários"
      variant="striped"
      colorScheme="gray"
      noDataMessage="Sem funcionários cadastrados"
      size="md"
      fetching={getEmployeesStatus === "pending"}
    />
  );
}
