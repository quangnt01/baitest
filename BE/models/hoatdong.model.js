const mongoose = require("mongoose");

const hoatdongSchema = new mongoose.Schema(
  {
    maHD: {
      type: String,
      require: true,
    },

    tenHD: {
      type: String,
      require: true,
    },
    moTaHD: {
      type: String,
      require: true,
    },
    ngayGioBD: {
      type: Date,
      default: Date.now,
    },
    ngayGioKT: {
      type: Date,
      require: true,
    },
    slToiThieuYC: {
      type: Number,
      require: true,
    },
    slToiDaYC: {
      type: Number,
      require: true,
    },
    thoiHanDK: {
      type: Date,
      require: true,
    },
    trangThai: {
      type: Number,
      default: 0,
    },
    maTV: {
      type: String,
      require: true,
    },
    lyDoHuyHoatDong: {
      type: String,
      default: "chua co gi het",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("hoatdong", hoatdongSchema);
