"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button background="transparent" color="white" onClick={() => router.replace("/")}>
      <BiArrowBack fontSize={20} />
    </Button>
  );
}
