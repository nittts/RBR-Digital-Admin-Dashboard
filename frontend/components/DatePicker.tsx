import { useRef, useState } from "react";
import { Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal, useOutsideClick } from "@chakra-ui/react";

import { useDayzed } from "dayzed";
import dayjs from "dayjs";

import DatePickerCalendar from "./DatePicker.calendar";

const DATE_FORMAT = "DD/MM/YYYY";

export interface SingleDatepickerProps {
  value?: Date;
  disabled?: boolean;
  onChange: (date?: Date | string) => void;
}

export const SingleDatepicker = (props: SingleDatepickerProps) => {
  const { value, disabled, onChange } = props;

  const ref = useRef<HTMLElement>(null);
  const initialFocusRef = useRef<HTMLInputElement>(null);

  const [proposedDate, setProposedDate] = useState<string>(value ? dayjs(value).format(DATE_FORMAT) : "");
  const [popoverOpen, setPopoverOpen] = useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setPopoverOpen(false),
  });

  const onChangePrime = (date?: string | Date) => {
    if (date) {
      onChange(date);

      setProposedDate(dayjs(date).format(DATE_FORMAT));
    }
  };

  const onDateSelected = (options: { selectable: boolean; date: Date }) => {
    const { selectable, date } = options;

    if (!selectable) {
      return;
    }

    if (date) {
      onChangePrime(date);
      setPopoverOpen(false);
      return;
    }
  };

  const dayzedData = useDayzed({
    showOutsideDays: true,
    onDateSelected,
    selected: value,
  });

  return (
    <Popover
      placement="top"
      variant="responsive"
      isOpen={popoverOpen}
      onClose={() => setPopoverOpen(false)}
      initialFocusRef={initialFocusRef}
      isLazy
    >
      <PopoverTrigger>
        <Input
          variant="filled"
          value={proposedDate}
          isDisabled={disabled}
          ref={initialFocusRef}
          onClick={() => setPopoverOpen(!popoverOpen)}
          onChange={(e) => {
            setProposedDate(e.target.value);
          }}
          onBlur={() => {
            const d = dayjs(proposedDate).format(DATE_FORMAT);
            dayjs(d).isValid() ? onChangePrime(d) : onChangePrime(undefined);
          }}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent ref={ref}>
          <PopoverBody display="flex" justifyContent="center">
            <DatePickerCalendar {...dayzedData} />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};
