import { Button } from "@chakra-ui/react";
import { Calendar, GetBackForwardPropsOptions } from "dayzed";

interface SingleDatepickerBackButtonsProps {
  calendars: Calendar[];
  getBackProps: (data: GetBackForwardPropsOptions) => Record<string, any>;
}

export default function DatePickerBackButton(props: SingleDatepickerBackButtonsProps) {
  const { calendars, getBackProps } = props;

  return (
    <>
      <Button {...getBackProps({ calendars, offset: 12 })} variant="ghost" size="sm">
        {"<<"}
      </Button>
      <Button {...getBackProps({ calendars })} variant="ghost" size="sm">
        {"<"}
      </Button>
    </>
  );
}
