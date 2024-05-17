import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box width="100vw" display="flex" justifyContent="center" paddingX="1vw" paddingY="1vh">
      <Heading
        as="h4"
        size={["md", "md", "lg", "lg"]}
        backgroundColor="blue.500"
        padding={[1, 1, 3, 3]}
        borderRadius="6px"
        boxShadow="0px 10px 10px 10xp rgba(0,0,0,0.25)"
        flex="1"
      >
        Painel Administrador de Funcionários
      </Heading>
    </Box>
  );
}
