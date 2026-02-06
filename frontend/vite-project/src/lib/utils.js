import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
//Bên trong hàm cn này là sự kết hợp của 2 thư viện con
/*
clsx: là thư viện giúp viết lớp có điều kiện 
twMerge: là xử lý xung đột khi gộp nhiều class tailwin lại với nhau
         Nó giúp mình biết được cái tailwin nào nên merge và kiểm tra 
         xem trong các lớp tailwin của mình có cái nào bị xung đột không
         Nếu có thì nó sẽ loại bỏ đi cái lớp bị xung đột 
         chỉ giữ lại lớp phía sau cùng 
         => Class nào được viết sau thì sẽ được sử dụng 
*/
