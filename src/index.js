import express from "express";
import salesRoutes from "./routes/sales.routes.js";
import morgan from "morgan";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

app.use("/api", salesRoutes);

app.listen(PORT);
console.log("Server Listen on PORT:", PORT);
