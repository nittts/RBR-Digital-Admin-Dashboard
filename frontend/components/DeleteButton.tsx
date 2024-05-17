import {
  Button,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";

type PopoverProps = {
  trigger: string;
  header: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  description: string;
};

export default function DeleteButton({ trigger, header, description, onConfirm, onCancel }: PopoverProps) {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <Button colorScheme="red" onClick={onToggle}>
          {trigger}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight="700">{header}</PopoverHeader>
        <PopoverBody>
          <VStack gap={2}>
            <Text>{description}</Text>
            <HStack>
              <Button colorScheme="green" onClick={onConfirm}>
                Confirmar
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  if (onCancel) onCancel();
                  onClose();
                }}
              >
                Cancelar
              </Button>
            </HStack>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
