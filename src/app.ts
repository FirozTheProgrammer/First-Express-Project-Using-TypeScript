import cors from "cors";
import express, { Application, Request, Response } from "express";
import { StudentController } from "./app/modules/Student/student.controller";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());



app.get("/", StudentController.createStudent );

export default app;
