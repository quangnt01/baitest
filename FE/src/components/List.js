import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Gửi request GET đến endpoint của API bằng Axios
    axios
      .get("http://localhost:8000/v1/hd")
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteHD = (ID) => {
    Swal.fire({
      title: "Bạn chắc chưa?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK !",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:8000/v1/hd/${ID}`).then((response) => {
            console.log(response.data);
            window.location.reload();
          });
          Swal.fire("Xóa Thành Công!", "success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Danh sách hoạt động</h1>
      <Link to="/themhd">Thêm Hoạt Động</Link>
      <ul>
        {/* Lặp qua từng phần tử trong state data */}
        <div className="row">
          {data.map((item) => (
            <div className="col-xl-6">
              <li key={item._id}>
                <p>Mã HD: {item.maHD}</p>
                <p>Tên HD: {item.tenHD}</p>
                <p>Mô tả HD: {item.moTaHD}</p>
                <p>Ngày giờ bắt đầu: {item.ngayGioBD}</p>
                <p>Ngày giờ kết thúc: {item.ngayGioKT}</p>
                <p>Số lượng tối thiểu yêu cầu: {item.slToiThieuYC}</p>
                <p>Số lượng tối thiểu đa cầu: {item.slToiDaYC}</p>
                <p>Thời hạn đăng ký: {item.thoiHanDK}</p>
                <p>Trạng thái: {item.trangThai}</p>
                <p>Mã TV: {item.maTV}</p>
                {/* <Link to="/edit">Edit</Link> */}
                <button onClick={() => deleteHD(item._id)}>Delete</button>
              </li>
              <hr />
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default List;
