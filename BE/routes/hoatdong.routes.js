const HoatDong = require("../controllers/hoatdong.controller");

const router = require("express").Router();

router.get("/", HoatDong.getAllHD);
router.post("/", HoatDong.createHD);
router.put("/:id", HoatDong.updateHD);
router.delete("/:id", HoatDong.deleteHD);

module.exports = router;
