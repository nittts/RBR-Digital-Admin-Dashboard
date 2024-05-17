"use2";

import { CreateEmployeePayload } from "@/@types/employees.types";
import { Departments } from "@/enums/deparments.enum";
import { Roles } from "@/enums/roles.enum";
import {
  Button,
  Card,
  CardBody,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  SelectField,
  Stack,
  StackDivider,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { SingleDatepicker } from "./DatePicker";
import { rolesToPt } from "@/mappers/roles";
import { departmentsToPt } from "@/mappers/departments";
import { CreateEmployeForm, createEmployeeForm } from "@/schemas/createEmployeeForm";
import { ZodError } from "zod";
import { useCreateEmployee } from "@/hooks/employees";

const renderSelectOptions = (options: { value: string; label: string }[]) => {
  return options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
};

const validateForm = (values: CreateEmployeForm) => {
  try {
    createEmployeeForm.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.formErrors.fieldErrors;
    }
  }
};

export default function CreateEmployeeForm({ onSubmit }: { onSubmit: () => void }) {
  const toast = useToast();
  const { createEmployee, createEmployeeError, createEmployeeStatus } = useCreateEmployee();

  const handleFormSubmit = async (payload: CreateEmployeePayload) => {
    const promise = createEmployee(payload).then(() => onSubmit());

    toast.promise(promise, {
      success: { title: "Sucesso", description: "Funcionário criado com sucesso", position: "bottom-left" },
      error: { title: "Erro", description: createEmployeeError?.message, position: "bottom-left" },
      loading: { title: "Criando...", description: "Realizando cadastro do funcionário", position: "bottom-left" },
    });
  };

  const { handleSubmit, errors, values, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      role: Roles.EMPLOYEE,
      department: Departments.HR,
      admissionDate: new Date(),
    },
    onSubmit: handleFormSubmit,
    validate: validateForm,
  });

  const roles = Object.values(Roles);
  const departments = Object.values(Departments);

  const isLoading = createEmployeeStatus === "pending";

  return (
    <form onSubmit={handleSubmit}>
      <Stack divider={<StackDivider />} spacing="4" justifyContent="center">
        <FormControl isRequired isInvalid={!!errors.name}>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            variant="filled"
            value={values.name}
            onChange={(event) => setFieldValue("name", event.target.value)}
            disabled={isLoading}
          />
          {errors.name && <FormErrorMessage>{errors.name}</FormErrorMessage>}
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.role}>
          <FormLabel>Cargo</FormLabel>
          <Select
            variant="filled"
            value={values.role}
            onChange={(event) => setFieldValue("role", event.target.value)}
            disabled={isLoading}
          >
            {renderSelectOptions(roles.map((value) => ({ value, label: rolesToPt(value as Roles, true) })))}
          </Select>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.department}>
          <FormLabel>Departamento</FormLabel>
          <Select
            variant="filled"
            value={values.department}
            onChange={(event) => setFieldValue("department", event.target.value)}
            disabled={isLoading}
          >
            {renderSelectOptions(
              departments.map((value) => ({ value, label: departmentsToPt(value as Departments, true) }))
            )}
          </Select>
        </FormControl>

        <FormControl isRequired isInvalid={!!errors.admissionDate}>
          <FormLabel>Data de Admissão</FormLabel>
          <SingleDatepicker
            value={values.admissionDate}
            onChange={(date) => setFieldValue("admissionDate", date)}
            disabled={isLoading}
          />
        </FormControl>

        <Button
          backgroundColor="blue.500"
          _hover={{ backgroundColor: "blue.300" }}
          loadingText="Criando..."
          type="submit"
          isLoading={isLoading}
          width="100%"
        >
          Criar Funcionário
        </Button>
      </Stack>
    </form>
  );
}
