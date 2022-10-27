const express = require("express");
const router = express.Router();
const camisasController = require("../controllers/camisas.controller");

router.post("/", camisasController.create);
router.get("/", camisasController.find);
router.get("/:id", camisasController.findOne);
router.put("/:id", camisasController.update);
router.delete("/:id", camisasController.remove);
module.exports = router;