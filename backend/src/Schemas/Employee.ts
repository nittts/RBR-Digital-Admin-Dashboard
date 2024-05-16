import mongoose from "mongoose";
import { Departments } from "../enums/departments.enum";
import { Roles } from "../enums/roles.enum";

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    enum: Roles,
    required: true,
  },
  department: {
    enum: Departments,
    required: true,
  },
  admissionDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
