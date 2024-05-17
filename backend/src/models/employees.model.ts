import mongoose from "mongoose";
import { Departments } from "../enums/departments.enum";

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["MANAGER", "SUPERVISOR", "EMPLOYEE"],
    required: true,
  },
  department: {
    type: String,
    enum: ["HR", "IT", "SALES", "FINANCES", "MARKETING", "MANAGEMENT", "PRD"],
    required: true,
  },
  admissionDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const model = mongoose.model("Employee", EmployeeSchema);

export default model;
