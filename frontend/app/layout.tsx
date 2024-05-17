import type { Metadata } from "next";

import { Roboto } from "next/font/google";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Providers from "@/provider";
import Header from "@/components/Header";
import { Flex } from "@chakra-ui/react";
import BackButton from "@/components/BackButton";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RDB Digital: Painel de Administrador",
  description: "Dashboard Admin para gerencia de Funcionários, aplicação desenvolvida para teste técnico.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>
        <Providers>
          <Header />
          <Flex direction="column" gap={3} alignItems="center" paddingX="1vw" paddingBottom="2vh">
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
