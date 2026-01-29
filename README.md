TodoX - MERN Stack Task Management App

todoX là một ứng dụng quản lý công việc (To-do list) hiện đại, được xây dựng trên nền tảng MERN Stack (MongoDB, Express, React, Node.js) và sử dụng thư viện component shadcn/ui để tối ưu hóa trải nghiệm người dùng với giao diện tinh tế.

🚀 Tính năng chính

Quản lý công việc (CRUD): Thêm, sửa, xóa và xem danh sách công việc.

Trạng thái công việc: Đánh dấu hoàn thành hoặc chưa hoàn thành.

Giao diện hiện đại: Sử dụng Radix UI và Tailwind CSS thông qua shadcn/ui.

Responsive Design: Hiển thị mượt mà trên cả điện thoại, máy tính bảng và máy tính để bàn.

Dark Mode: Hỗ trợ giao diện sáng/tối (tùy chọn).

🛠 Công nghệ sử dụng

Frontend

ReactJS (Vite)

shadcn/ui (Tailwind 4 CSS + Radix UI)

Lucide React (Icons)

Axios (Kết nối API)

Backend

Node.js & Express

MongoDB & Mongoose (Database)

dotenv (Quản lý biến môi trường)

📂 Cấu trúc dự án

todoX/
├── client/ # Mã nguồn ReactJS
│ ├── src/
│ │ ├── components/ # shadcn components & custom components
│ │ ├── lib/ # Tiện ích (utils)
│ │ └── App.jsx
├── server/ # Mã nguồn Node.js
│ ├── models/ # Mongoose Schemas
│ ├── routes/ # API Routes
│ └── server.js # Entry point
└── README.md

⚙️ Cài đặt

1. Bản sao mã nguồn (Clone)

git clone [https://github.com/your-username/todoX.git](https://github.com/your-username/todoX.git)
cd todoX

2. Cấu hình Backend

cd server
npm install

Tạo file .env trong thư mục server/ và thêm các thông số sau:

PORT=5001
MONGODB_URI=your_mongodb_connection_string

Chạy server:

npm run dev

3. Cấu hình Frontend

cd ../client
npm install

Chạy ứng dụng React:

npm run dev

✨ Các thành phần shadcn/ui đã dùng

Dự án này tích hợp các component mạnh mẽ từ shadcn/ui như:

Button

Input

Checkbox

Card

Dialog (cho việc chỉnh sửa task)

Toast (thông báo trạng thái)

📝 Giấy phép

Dự án này được cấp phép theo tiêu chuẩn MIT License.

Chúc bạn có trải nghiệm tuyệt vời với todoX!
