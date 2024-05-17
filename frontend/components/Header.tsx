import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      position="absolute"
      left="0.5vw"
      top="0.5vh"
      width="99vw"
      backgroundColor="blue.500"
      padding={[1, 1, 3, 3]}
      borderRadius="6px"
      boxShadow="0px 10px 10px 10xp rgba(0,0,0,0.25)"
    >
      <Heading as="h4" size={["md", "md", "lg", "lg"]}>
        Painel Administrador de Funcionários
      </Heading>
    </Box>
  );
}
