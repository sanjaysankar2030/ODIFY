const express = require("express");
const router = express.Router();
const OdRequest = require("../models/OdRequest");

router.post("/", async (req, res) => {
  const od = await OdRequest.create(req.body);
  res.json(od);
});

router.get("/", async (req, res) => {
  const list = await OdRequest.find().sort({ createdAt: -1 });
  res.json(list);
});

module.exports = router;
