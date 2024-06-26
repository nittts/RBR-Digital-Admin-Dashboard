import { z } from "zod";
import { Departments } from "../enums/departments.enum";
import { Roles } from "../enums/roles.enum";

export const employeesSearchParams = z.object({
  name: z.string().optional(),
  admissionDate: z.coerce.date().optional(),
  department: z.nativeEnum(Departments).optional(),
  role: z.nativeEnum(Roles).optional(),
});

export const findById = z.object({
  id: z.string({ message: "ID deve ser válido." }).uuid({ message: "ID deve ser um UUID válido." }),
});

export const createEmployeePayload = z.object({
  name: z.string({ message: "O nome deve ser um texto válido." }),
  role: z.nativeEnum(Roles, { message: "Cargo do funcionário inválido." }),
  department: z.nativeEnum(Departments, { message: "Departamento inválido ou inexistente" }),
  admissionDate: z.coerce.date(),
});

export const updateEmployeePayload = createEmployeePayload.partial();
