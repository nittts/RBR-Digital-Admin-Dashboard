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
import { BiTrash } from "react-icons/bi";

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
        <Button
          background="red.500"
          color="white"
          _hover={{ backgroundColor: "red.300" }}
          onClick={onToggle}
          leftIcon={<BiTrash />}
        >
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
              <Button
                background="green.500"
                _hover={{ backgroundColor: "green.300" }}
                color="white"
                onClick={onConfirm}
              >
                Confirmar
              </Button>
              <Button
                background="red.500"
                _hover={{ backgroundColor: "red.300" }}
                color="white"
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
