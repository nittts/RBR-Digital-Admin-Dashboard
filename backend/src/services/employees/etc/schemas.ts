import { z } from "zod";
import { Departments } from "../../../enums/departments.enum";
import { Roles } from "../../../enums/roles.enum";

export const employeesSearchParams = z.object({
  name: z.string().optional(),
  admissionDate: z.coerce.date().optional(),
  department: z.nativeEnum(Departments).optional(),
  role: z.nativeEnum(Roles).optional(),
});
