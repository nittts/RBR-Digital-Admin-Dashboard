"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      position="fixed"
      bottom="5"
      right="5"
      background="blue.500"
      _hover={{ background: "blue.300" }}
      color="white"
      leftIcon={<BiArrowBack fontSize={20} />}
      onClick={() => router.back()}
    >
      Voltar
    </Button>
  );
}
