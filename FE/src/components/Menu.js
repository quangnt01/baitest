import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div>
      <h1>Menu NÈ</h1>
      <Link to="/themhd">Thêm Hoạt Động</Link>
      <Link to="/danhsach">Danh sách</Link>
    </div>
  );
};
