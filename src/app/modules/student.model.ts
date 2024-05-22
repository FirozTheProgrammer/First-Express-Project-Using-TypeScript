import { Schema, model, connect } from "mongoose";
import {
  GuardianType,
  LocalGuardian,
  Student,
  UserName,
} from "./Student/student.interface";

// user name schema
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastNmae: { type: String, required: true },
});

// Guardian Schema
const guardianSchema = new Schema<GuardianType>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

// Local Guardian Schema
const LocalGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
});

// student Schema
const studentSchema = new Schema<Student>({
  id: { type: String },

  //   student info
  name: userNameSchema,
  gender: ["male", "female"],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddres: { type: String, required: true },

  //   guardian info
  guardian: guardianSchema,

  //   local guardian info
  localGuardian: LocalGuardianSchema,

  //   profile info
  profileImage: { type: String },
  isActive: ["active", "block"],
});
