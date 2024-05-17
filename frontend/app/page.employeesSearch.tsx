"use client";

import { FormControl, FormLabel, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

type EmployeeSearchProps = {
  onSearch: (value: string) => void;
};

export default function EmployeesSearch({ onSearch }: EmployeeSearchProps) {
  return (
    <FormControl>
      <FormLabel fontWeight={700}>Pesquisar Funcionário</FormLabel>
      <InputGroup>
        <Input variant="filled" onChange={(event) => onSearch(event.target.value.trim())} />
        <InputRightAddon>
          <BiSearch />
        </InputRightAddon>
      </InputGroup>
    </FormControl>
  );
}
