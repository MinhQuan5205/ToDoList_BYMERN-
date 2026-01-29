import express from "express";
import taskRoute from "./routes/tasksRouters.js";

const app = express();

app.use("/api/tasks", taskRoute); //khai báo sử dụng api trong tệp mới

app.listen(5001, () => {
  console.log("Server bắt đầu trên cổng 5001");
});
