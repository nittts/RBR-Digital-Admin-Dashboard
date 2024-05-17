import { Button } from "@chakra-ui/react";
import { Calendar, GetBackForwardPropsOptions } from "dayzed";

interface SingleDatepickerForwardButtonsProps {
  calendars: Calendar[];
  getForwardProps: (data: GetBackForwardPropsOptions) => Record<string, any>;
}

export default function DatePickerForwardButton(props: SingleDatepickerForwardButtonsProps) {
  const { calendars, getForwardProps } = props;
  return (
    <>
      <Button {...getForwardProps({ calendars })} variant="ghost" size="sm">
        {">"}
      </Button>
      <Button
        {...getForwardProps({
          calendars,
          offset: 12,
        })}
        variant="ghost"
        size="sm"
      >
        {">>"}
      </Button>
    </>
  );
}
