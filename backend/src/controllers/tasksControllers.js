export const getAllTasks = (request, response) => {
  response.status(400).send("Bạn có 10 việc cần làm");
};

export const createTask = (req, res) => {
  res.status(201).json({ message: "Nhiệm Vụ mới đã được thêm thành công" });
};
export const updateTask = (req, res) => {
  res.status(201).json({ message: "Nhiệm Vụ mới đã được update thành công" });
};
export const deleteTask = (req, res) => {
  res.status(201).json({ message: "Nhiệm vụ đã được xóa thành công" });
};
