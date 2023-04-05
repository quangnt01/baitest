const HoatDong = require("../models/hoatdong.model");

const hoatDong = {
  getAllHD: async (req, res) => {
    try {
      const hds = await HoatDong.find();
      res.status(200).json(hds);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  createHD: async (req, res) => {
    try {
      const newHD = await new HoatDong({
        maHD: req.body.maHD,
        tenHD: req.body.tenHD,
        moTaHD: req.body.moTaHD,
        trangThai: req.body.trangThai,
        ngayGioBD: req.body.ngayGioBD,
        ngayGioKT: req.body.ngayGioKT,
        slToiThieuYC: req.body.slToiThieuYC,
        slToiDaYC: req.body.slToiDaYC,
        thoiHanDK: req.body.thoiHanDK,
        maTV: req.body.maTV,
      });
      const hd = await newHD.save();
      res.status(200).json(hd);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateHD: async (req, res) => {
    try {
      const results = await HoatDong.findById(req.params.id);
      if (results.hoatdongID === req.body.hoatdongID) {
        await results.updateOne({
          $set: {
            maHD: req.body.maHD,
            tenHD: req.body.tenHD,
            moTaHD: req.body.moTaHD,
            ngayGioBD: req.body.ngayGioBD,
            ngayGioKT: req.body.ngayGioKT,
            slToiThieuYC: req.body.slToiThieuYC,
            thoiHanDK: req.body.thoiHanDK,
            trangThai: req.body.trangThai,
          },
        });
        res.status(200).json("Update Hoat Dong successfully");
      } else {
        res.status(500).json("Can't update Hoat Dong");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteHD: async (req, res) => {
    try {
      const hd = await HoatDong.findByIdAndDelete(req.params.id);
      res.status(200).json("Del successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
module.exports = hoatDong;
