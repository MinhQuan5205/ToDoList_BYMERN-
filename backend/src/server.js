import express from "express";
import taskRoute from "./routes/tasksRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
dotenv.config();

const PORT = process.env.PORT || 5001;
const _dirname = path.resolve();

const app = express();

//MidlleWares
app.use(express.json());
if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: ["http://localhost:5173"] }));
}

app.use("/api/tasks", taskRoute); //khai báo sử dụng api trong tệp mới

if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(
    _dirname,
    "..",
    "frontend",
    "vite-project",
    "dist",
  );
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server bắt đầu trên cổng ${PORT}`);
  });
}); //này đảm bảo rằng chỉ khi kết nối với database rồi thì server mới chạy ở cổng 5001
