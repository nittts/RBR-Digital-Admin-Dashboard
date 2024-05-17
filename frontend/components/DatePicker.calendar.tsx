import { Box, Button, Divider, HStack, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

import { RenderProps } from "dayzed";

import DatePickerBackButton from "./DatePicker.backButton";
import DatePickerForwardButton from "./DatePicker.forwardButton";

const MONTH_NAMES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const DAY_NAMES = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

export default function DatePickerCalendar(props: RenderProps) {
  const { calendars, getDateProps, getBackProps, getForwardProps } = props;

  if (!calendars.length) {
    return null;
  }

  return (
    <Box>
      <HStack alignItems="center">
        {calendars.map((calendar) => {
          return (
            <VStack key={`${calendar.month}${calendar.year}`}>
              <HStack>
                <DatePickerBackButton calendars={calendars} getBackProps={getBackProps} />
                <Heading size="xs" textAlign="center">
                  {MONTH_NAMES[calendar.month]} {calendar.year}
                </Heading>
                <DatePickerForwardButton calendars={calendars} getForwardProps={getForwardProps} />
              </HStack>
              <Divider />
              <SimpleGrid columns={7} spacing={1} textAlign="center">
                {DAY_NAMES.map((day) => (
                  <Box key={`${calendar.month}${calendar.year}${day}`}>
                    <Text fontSize="xs" fontWeight="semibold">
                      {day}
                    </Text>
                  </Box>
                ))}
                {calendar.weeks.map((week, weekIndex) => {
                  if (Array.isArray(week)) {
                    return week.map((dateObj: any, index) => {
                      const { date, today, prevMonth, nextMonth, selected } = dateObj;

                      const key = `${calendar.month}${calendar.year}${weekIndex}${index}`;
                      const isDisabled = prevMonth || nextMonth;

                      const style = () => {
                        const obj: { [x: string]: string } = {
                          variant: "outline",
                          borderColor: "transparent",
                        };

                        if (today) {
                          obj.borderColor = "blue.400";
                        }

                        if (selected) {
                          obj.bg = "blue.200";
                        }

                        return obj;
                      };

                      return (
                        <Button
                          {...getDateProps({
                            dateObj,
                            disabled: isDisabled,
                          })}
                          key={key}
                          size="xs"
                          {...style()}
                        >
                          {date.getDate()}
                        </Button>
                      );
                    });
                  }
                })}
              </SimpleGrid>
            </VStack>
          );
        })}
      </HStack>
    </Box>
  );
}
