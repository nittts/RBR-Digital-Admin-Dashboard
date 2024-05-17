"use client";

import { Button, Flex, Tooltip, useColorMode } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      backgroundColor="blue.600"
      color="gray.50"
      padding={[1, 1, 3, 3]}
      borderRadius="6px"
      marginX="1vw"
      marginY="1vh"
      shadow="lg"
    >
      <Heading as="h4" size={["md", "md", "lg", "lg"]} flex="1">
        Painel Administrador de Funcionários
      </Heading>
      <Tooltip label={`${colorMode === "light" ? "Ativar" : "Desativer"} modo escuro`}>
        <span>
          <Button onClick={toggleColorMode} background="blue.700" _hover={{ background: "blue.500" }} color="white">
            {colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
          </Button>
        </span>
      </Tooltip>
    </Flex>
  );
}
