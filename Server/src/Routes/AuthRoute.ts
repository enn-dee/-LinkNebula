import express, { Request, Response } from "express";
import { SignUp } from "../controllers/AuthUser";
const route = express.Router();

route.post("/signup", SignUp);

export default route;
