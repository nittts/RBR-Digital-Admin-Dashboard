import { ReactNode } from "react";
import { ColorScheme } from "./theme";

export type Columns = {
  key: string;
  header: ReactNode | string;
  format?: (data: any) => string | ReactNode | number;
  disableOrder?: boolean;
};

export type RowData = any;

export type TableProps = {
  caption: string;
  columns: Columns[];
  rows: RowData[];
  size?: "sm" | "md" | "lg";
  variant?: "simple" | "striped" | "unstyled";
  colorScheme?: ColorScheme;
  noDataMessage?: string;
  fetching?: boolean;
};
