import { Request, Response } from "express";
import { Schema, z } from "zod";
import bcrypt from "bcrypt";
const userSchmea = z.object({
  username: z.string().min(3).max(10),
  password: z.string().min(4).max(15),
});
type userAllow = z.infer<typeof userSchmea>;

export const SignUp = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body as userAllow;
    if (!username || !password) {
      return res.status(401).json({ error: "All fields are required" });
    }
    const salt: string = await bcrypt.genSalt(10);
    const hashedPass: String = await bcrypt.hash(password, salt);

    return res.status(200).json({ success: `Signed Up - hased ${hashedPass}` });
  } catch (err) {
    console.log("Error in AuthUser: ", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
