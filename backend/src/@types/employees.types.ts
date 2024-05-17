import z from "zod";
import * as schemas from "../schemas/employees.schemas";

export type EmployeesSearchParams = z.infer<typeof schemas.employeesSearchParams>;
export type FindById = z.infer<typeof schemas.findById>;
export type CreateEmployeePayload = z.infer<typeof schemas.createEmployeePayload>;
export type updateEmployeePayload = z.infer<typeof schemas.updateEmployeePayload>;
