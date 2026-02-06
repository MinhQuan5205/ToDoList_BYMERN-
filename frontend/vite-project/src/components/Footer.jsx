import React from "react";

function Footer({ completedTaskCount = 0, activeTasksCount = 0 }) {
  return (
    <>
      {/* Nếu tổng của completedTaskCount và activeTasksCount lớn hơn 0 thì mới render còn không thì không hiện gì hết */}
      {completedTaskCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTaskCount > 0 && (
              <>
                👏 Tuyệt Vời ! Bạn Đã Hoàn Thành {completedTaskCount} Việc 📚
                {activeTasksCount > 0 &&
                  `, còn ${activeTasksCount} việc nữa thôi, Cố Lên! 💪🏽`}
              </>
            )}
            {/* Chưa Hoàn thành Nhiệm Vụ Nào Hết và có nhiều NV */}
            {completedTaskCount == 0 && activeTasksCount > 0 && (
              <>🏃🏻‍♂️‍➡️Hãy Bắt Đầu Làm {activeTasksCount} nhiệm vụ nào !</>
            )}
          </p>
        </div>
      )}
    </>
  );
}

export default Footer;
