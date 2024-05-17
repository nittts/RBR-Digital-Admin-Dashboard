import { Departments } from "@/enums/deparments.enum";
import { Roles } from "@/enums/roles.enum";

export type Employee = {
  id: string;
  name: string;
  role: Roles;
  admissionDate: Date;
  department: Departments;
};

export type EmployeeFilters = {
  name?: string;
  role?: Roles;
  admissionDate?: Date;
  department?: Departments;
};

export type EmployeePayload = {
  name: string;
  role: Roles;
  admissionDate: Date;
  department: Departments;
};

export type EditEmployeePayload = { id: string } & EmployeePayload;
