import { Schema, model, connect } from "mongoose";

// 1. Create an interface representing a document in MongoDB.

// User name type
export type UserName = {
  firstName: string;
  middleName: string;
  lastNmae: string;
};

// Guardian type
export type GuardianType = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

// Local Guardian
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

// student type
export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  presentAddress: string;
  permanentAddres: string;
  guardian: GuardianType;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "active" | "block";
};
