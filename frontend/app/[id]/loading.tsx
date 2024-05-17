import { Box, Progress } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box position="fixed" width="100vw" height="100vh" top="0" background="rgba(0,0,0,0.5)">
      <Progress size="md" isIndeterminate />
    </Box>
  );
}
