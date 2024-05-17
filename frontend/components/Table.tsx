import { ColorScheme } from "@/@types/theme";
import { Table as ChakraTable, Flex, TableCaption, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useBreakpointValue } from "@chakra-ui/react";

type Columns = {
  key: string;
  header: ReactNode | string;
  format?: (data: any) => string | ReactNode | number;
};

type Data = any;

type TableProps = {
  caption: string;
  columns: Columns[];
  rows: Data[];
  size?: "sm" | "md" | "lg";
  variant?: "simple" | "striped" | "unstyled";
  colorScheme?: ColorScheme;
  noDataMessage?: string;
};

export default function Table(props: TableProps) {
  const {
    caption,
    columns = [],
    rows = [],
    size,
    variant = "striped",
    colorScheme,
    noDataMessage = "Sem Registros",
  } = props;

  const isSmall = useBreakpointValue({
    fallback: true,
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
    "2xl": false,
  });

  const generateColumns = () => {
    if (isSmall) {
      return (
        <Td>
          <Flex direction="column" gap={2}>
            {columns.map(({ key, header }, index) => (
              <p key={`${key}-table-row-${index}`}>{header}</p>
            ))}
          </Flex>
        </Td>
      );
    }

    return columns.map((col) => <Td key={col.key}>{col.header}</Td>);
  };

  const generateRows = () => {
    if (isSmall) {
      return rows.map((row, index) => (
        <Tr key={`${row.id}-${index}`}>
          <Td>
            <Flex direction="column" gap={2}>
              {columns.map(({ key, format }, index) => (
                <p key={`${key}-table-row-${index}`}>{format ? format(row[key]) : row[key]}</p>
              ))}
            </Flex>
          </Td>
        </Tr>
      ));
    }

    return rows.map((row, index) => (
      <Tr key={`${row.id}-${index}`}>
        {columns.map(({ key, format }, index) => (
          <Td key={`${row[key]}-${index}`}>{format ? format(row[key]) : row[key]}</Td>
        ))}
      </Tr>
    ));
  };

  return (
    <ChakraTable size={size} variant={variant} colorScheme={colorScheme}>
      <TableCaption placement="bottom">{rows.length === 0 ? noDataMessage : caption}</TableCaption>
      <Thead>
        <Tr>{generateColumns()}</Tr>
      </Thead>
      <Tbody>{generateRows()}</Tbody>
    </ChakraTable>
  );
}
