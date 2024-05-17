import { ProviderProps } from "@/@types/providers.types";
import ThemeProvider from "./theme.provider";
import ReactQueryProvider from "./reactQuery.provider";
export default function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </ThemeProvider>
  );
}
