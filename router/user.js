const express = require("express");
const {
  getAllUsers,
  addUser,
  editUser,
  deleteUser,
  getUser,
} = require("../controllers/user.controllers");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:_id", getUser);
router.post("/", addUser);
router.put("/:_id", editUser);
router.delete("/:_id", deleteUser);

module.exports = router;
