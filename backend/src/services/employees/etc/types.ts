import z from "zod";
import * as schemas from "./schemas";

export type EmployeesSearchParams = z.infer<typeof schemas.employeesSearchParams>;
export type FindById = z.infer<typeof schemas.findById>;
