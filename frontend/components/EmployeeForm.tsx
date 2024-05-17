import { EmployeePayload } from "@/@types/employees.types";
import { Departments } from "@/enums/deparments.enum";
import { Roles } from "@/enums/roles.enum";
import { departmentsToPt } from "@/mappers/departments";
import { rolesToPt } from "@/mappers/roles";
import { CreateEmployeForm, createEmployeeForm } from "@/schemas/createEmployeeForm";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Stack, StackDivider } from "@chakra-ui/react";
import { useFormik } from "formik";
import { ZodError } from "zod";
import { SingleDatepicker } from "./DatePicker";

type EmployeesFormProps = {
  onFinish: (payload: EmployeePayload) => void;
  promiseStatus: "error" | "idle" | "pending" | "success";
  initialValues?: EmployeePayload;
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

const renderSelectOptions = (options: { value: string; label: string }[]) => {
  return options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
};

const baseInitialValues = {
  name: "",
  role: Roles.EMPLOYEE,
  department: Departments.HR,
  admissionDate: new Date(),
};

export default function EmployeeForm({ onFinish, promiseStatus, initialValues }: EmployeesFormProps) {
  const { handleSubmit, errors, values, setFieldValue } = useFormik({
    initialValues: initialValues ?? baseInitialValues,
    onSubmit: onFinish,
    validate: validateForm,
    enableReinitialize: true,
  });

  const roles = Object.values(Roles);
  const departments = Object.values(Departments);

  const isLoading = promiseStatus === "pending";

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
          color="white"
        >
          Finalizar
        </Button>
      </Stack>
    </form>
  );
}
