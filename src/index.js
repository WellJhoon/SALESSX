import express from 'express';
import moduleName from 'module'
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use(morgan("common"));

app.use("/api", salesRoutes);

app.listen(PORT);
console.log("Server on port", PORT);