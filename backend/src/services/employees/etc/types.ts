import z from "zod";
import * as schemas from "./schemas";

export type EmployeesSearchParams = z.infer<typeof schemas.employeesSearchParams>;
