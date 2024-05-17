import Header from "@/components/Header";
import { Card, Flex } from "@chakra-ui/react";

import EmployeesTable from "./page.employeesTable";
import EmployeesSearch from "./page.employeesSearch";
import EmployeesCreate from "./page.employeesCreate";

export default function Home() {
  return (
    <>
      <Card width="100%" padding={2}>
        <Flex
          direction={["column", "column", "row", "row"]}
          alignItems="flex-start"
          justifyContent="space-between"
          width="100%"
          gap={5}
        >
          <EmployeesSearch />
          <EmployeesCreate />
        </Flex>
      </Card>
      <Card width="100%">
        <EmployeesTable />
      </Card>
    </>
  );
}
