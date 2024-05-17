import { Departments } from "@/enums/deparments.enum";
import { Roles } from "@/enums/roles.enum";
import { z } from "zod";

export const createEmployeeForm = z.object({
  name: z.string().min(1, { message: "Nome deve ser um texto válido." }),
  role: z.nativeEnum(Roles, { message: "Cargo inválido." }),
  department: z.nativeEnum(Departments, { message: "Departamento inválido." }),
  admissionDate: z.coerce.date({ message: "Data de admissão inválida." }),
});

export type CreateEmployeForm = z.infer<typeof createEmployeeForm>;
