import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  const student = req.body;

  try {
    // will call service func to send this data
    const result = await StudentServices.createStudentIntoDB(student);

    // send response
    res.status(200).json({
      success: true,
      message: " Student is Create succesfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentController = {
  createStudent,
};
