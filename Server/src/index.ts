require("dotenv").config();
import express from "express";
import cors from "cors";
const app = express();
const PORT: number = (process.env.PORT as unknown as number) || 3000;

// custom imports
import route from "./Routes/AuthRoute";

app.use(express.json())
app.use(cors())

// custom routes
app.use("/api/user", route);

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
