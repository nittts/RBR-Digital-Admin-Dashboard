"use client";

import { Card, Flex } from "@chakra-ui/react";
import { useState } from "react";

import EmployeesTable from "./page.employeesTable";
import EmployeesSearch from "./page.employeesSearch";
import EmployeesCreate from "./page.employeesCreate";
import { useDebounce } from "@uidotdev/usehooks";

export default function Home() {
  const [searchParam, setsearchParam] = useState("");
  const debouncedFilter = useDebounce(searchParam, 500);

  return (
    <>
      <Card width="100%" padding={2} shadow="lg" variant="outline">
        <Flex
          direction={["column", "column", "row", "row"]}
          alignItems="flex-end"
          justifyContent="space-between"
          width="100%"
          gap={5}
        >
          <EmployeesSearch onSearch={(searchParam) => setsearchParam(searchParam)} />
          <EmployeesCreate />
        </Flex>
      </Card>
      <Card width="100%" shadow="lg" variant="outline">
        <EmployeesTable filters={{ name: debouncedFilter }} />
      </Card>
    </>
  );
}
