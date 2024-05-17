import {
  Box,
  Table as ChakraTable,
  Fade,
  Flex,
  Progress,
  TableCaption,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { ImArrowDown } from "react-icons/im";

import { TableProps } from "@/@types/table.types";

function compareValues(a: string | number | Date, b: string | number | Date) {
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b, undefined, { numeric: true });
  } else if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }

  return 0;
}

function parseValue(value: string | number | Date) {
  if (dayjs(value).isValid()) {
    return dayjs(value).unix();
  }

  if (typeof value === "string") return value;

  return value;
}

export default function Table(props: TableProps) {
  const { columns = [], rows = [], variant = "striped", noDataMessage = "Sem Registros" } = props;
  const [visibleRows, setVisibleRows] = useState(rows);
  const [activeOrder, setActiveOrder] = useState("");

  const isSmall = useBreakpointValue({
    fallback: true,
    base: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
    "2xl": false,
  });

  const handleOrder = useCallback(
    (key: string) => {
      const newRows = [...visibleRows];

      setActiveOrder((prev) => (prev === key ? "" : key));

      if (activeOrder === key) {
        return setVisibleRows(rows);
      }

      const sortedRows = newRows.sort((a, b) => {
        const aValue = parseValue(a[key]);
        const bValue = parseValue(b[key]);

        return compareValues(aValue, bValue);
      });

      setVisibleRows(sortedRows);
    },
    [activeOrder, rows, visibleRows]
  );

  const generateColumns = useCallback(() => {
    if (isSmall) {
      return (
        <Td>
          <Flex direction="column" gap={2}>
            {columns.map(({ key, header, disableOrder }, index) => (
              <Fade in={!!columns} key={`${key}-table-row-${index}`}>
                <Box
                  cursor={disableOrder === undefined && !disableOrder ? "pointer" : "default"}
                  onClick={() => disableOrder === undefined && !disableOrder && handleOrder(key)}
                  _hover={{ color: "blue.300" }}
                  color={activeOrder === key ? "blue.300" : "inherit"}
                >
                  <Flex gap={2} alignItems="flex-end">
                    {header}
                    <Fade in={activeOrder === key}>
                      <ImArrowDown color="#63b3ed" />
                    </Fade>
                  </Flex>
                </Box>
              </Fade>
            ))}
          </Flex>
        </Td>
      );
    }

    return columns.map(({ key, header, disableOrder }) => (
      <Td
        key={key}
        onClick={() => disableOrder === undefined && !disableOrder && handleOrder(key)}
        cursor={disableOrder === undefined && !disableOrder ? "pointer" : "default"}
      >
        <Fade in={!!columns}>
          <Flex gap={2} alignItems="flex-end">
            {header}
            <Fade in={activeOrder === key}>
              <ImArrowDown />
            </Fade>
          </Flex>
        </Fade>
      </Td>
    ));
  }, [columns, handleOrder, isSmall, activeOrder]);

  const generateRows = useCallback(() => {
    if (isSmall) {
      return visibleRows.map((row, index) => (
        <Tr key={`${row.id}-${index}`}>
          <Td>
            <Flex direction="column" gap={2}>
              {columns.map(({ key, format, header }, index) => (
                <Fade in={!!visibleRows} key={`${key}-table-row-${index}`}>
                  <Flex gap={2} alignItems="center" justifyContent="space-between">
                    <Text>{header}:</Text>
                    {format ? format(row[key]) : row[key]}
                  </Flex>
                </Fade>
              ))}
            </Flex>
          </Td>
        </Tr>
      ));
    }

    return visibleRows.map((row, index) => (
      <Tr key={`${row.id}-${index}`}>
        {columns.map(({ key, format, header }, index) => (
          <Td key={`${row[key]}-${index}`}>
            <Fade in={!!visibleRows}>{format ? format(row[key]) : row[key]}</Fade>
          </Td>
        ))}
      </Tr>
    ));
  }, [columns, isSmall, visibleRows]);

  useEffect(() => setVisibleRows(rows), [rows]);

  if (props.fetching) {
    return (
      <Box flex={1} paddingX={2} gap={2} textAlign="center">
        <Progress size="md" isIndeterminate />
        <Text>Buscando dados da tabela...</Text>
      </Box>
    );
  }

  return (
    <ChakraTable size={props.size} variant={variant} colorScheme={props.colorScheme}>
      <TableCaption placement="bottom">{rows.length === 0 ? noDataMessage : props.caption}</TableCaption>
      <Thead>
        <Tr>{generateColumns()}</Tr>
      </Thead>
      <Tbody>{generateRows()}</Tbody>
    </ChakraTable>
  );
}
