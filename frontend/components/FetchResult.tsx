import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/react";

type FetchResultProps = {
  status: "error" | "success" | "info" | "warning";
  description: string;
  title: string;
};

export default function FetchResult({ status, description, title }: FetchResultProps) {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
      minW="200px"
      maxW="400px"
      borderRadius="8px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{description}</AlertDescription>
    </Alert>
  );
}
