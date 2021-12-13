const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce");

router.post("/", sauceCtrl.createSauce);
router.get("/", sauceCtrl.getAllSauces);
router.get("/:id", sauceCtrl.getOneSauce);
router.put("/:id", sauceCtrl.modifySauce);
router.delete("/:id", sauceCtrl.deleteSauce);
router.post("/:id/like", sauceCtrl.likeSauce);

module.exports = router;
