import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import List from "./List";

export const Create = () => {
  const [maHD, setMaHD] = useState("");
  const [tenHD, setTenHD] = useState("");
  const [moTaHD, setMoTaHD] = useState("");
  const [ngayGioKT, setNgayGioKT] = useState("");
  const [slToiThieuYC, setSlToiThieuYC] = useState("");
  const [slToiDaYC, setSlToiDaYC] = useState("");
  const [thoiHanDK, setThoiHanDK] = useState("");
  const [trangThai, setTrangThai] = useState("");
  const [maTV, setMaTV] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Tạo object dữ liệu để gửi lên API
    const data = {
      maHD,
      tenHD,
      moTaHD,
      ngayGioKT,
      slToiThieuYC,
      slToiDaYC,
      thoiHanDK,
      trangThai,
      maTV,
    };

    // Gửi request POST tới API với Axios
    axios
      .post("http://localhost:8000/v1/hd", data)
      .then((response) => {
        console.log(response.data);
        // Xử lý response từ server
        Swal.fire("Thêm Thành Công!", "success");
        navigate("/danhsach");
      })
      .catch((error) => {
        console.log(error);
        // Xử lý lỗi nếu có
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Mã HD:
          <input
            required
            type="text"
            value={maHD}
            onChange={(e) => setMaHD(e.target.value)}
          />
        </label>
        <label>
          Tên HD:
          <input
            required
            type="text"
            value={tenHD}
            onChange={(e) => setTenHD(e.target.value)}
          />
        </label>
        <label>
          Mô tả HD:
          <input
            required
            type="text"
            value={moTaHD}
            onChange={(e) => setMoTaHD(e.target.value)}
          />
        </label>
        <label>
          Ngày giờ kết thúc:
          <input
            required
            type="text"
            value={ngayGioKT}
            onChange={(e) => setNgayGioKT(e.target.value)}
          />
        </label>
        <label>
          Số lượng tối thiểu yêu cầu:
          <input
            required
            type="number"
            value={slToiThieuYC}
            onChange={(e) => setSlToiThieuYC(e.target.value)}
          />
        </label>
        <label>
          Số lượng tối đa yêu cầu:
          <input
            required
            type="number"
            value={slToiDaYC}
            onChange={(e) => setSlToiDaYC(e.target.value)}
          />
        </label>
        <label>
          Thời hạn đăng ký:
          <input
            required
            type="text"
            value={thoiHanDK}
            onChange={(e) => setThoiHanDK(e.target.value)}
          />
        </label>
        <label>
          Trạng thái:
          <input
            required
            type="number"
            value={trangThai}
            onChange={(e) => setTrangThai(e.target.value)}
          />
        </label>
        <label>
          Mã TV:
          <input
            required
            type="text"
            value={maTV}
            onChange={(e) => setMaTV(e.target.value)}
          />
        </label>
        <button type="submit">Tạo mới</button>
        <Link to="/danhsach">Quay Lại Danh Sách</Link>
      </form>
    </div>
  );
};
