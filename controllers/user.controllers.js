const { request } = require("express");
const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.send({ msg: "users found", users: getUsers });
  } catch (error) {
    res.status(400).send({ msg: "could not get", error });
  }
};
exports.getUser = async (req, res) => {
  try {
    let getUser = await User.findById(req.params._id);
    res.send({ msg: "user found", user: getUser });
  } catch (error) {
    res.status(400).send({ msg: "could not get", error });
  }
};
exports.addUser = async (req, res) => {
  try {
    const addUser = new User({ ...req.body });
    await addUser.save();
    res.send({ msg: "user added", user: addUser });
  } catch (error) {
    res.status(400).send({ msg: "could not add user", error });
  }
};
exports.editUser = async (req, res) => {
  try {
    await User.updateOne({ _id: req.params._id }, { $set: { ...req.body } });
    res.send({ msg: "user updated" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({ msg: "could not update", err: error, param: req.params });
    console.log(req.params);
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndRemove({ _id: req.params._id });
    res.send({ msg: "user deleted", user: deletedUser });
  } catch (error) {
    res.status(400).send({ msg: "could not delete", error });
  }
};
