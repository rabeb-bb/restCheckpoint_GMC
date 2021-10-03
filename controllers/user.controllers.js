const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.send({ msg: "users found", getUsers });
  } catch (error) {
    res.status(400).send({ msg: "could not get", error });
  }
};
exports.addUser = async (req, res) => {
  try {
    const addUser = new User({ ...req.body });
    await addUser.save();
    res.send({ msg: "user added", addUser });
  } catch (error) {
    res.status(400).send({ msg: "could not add user", error });
  }
};
exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
    res.send({ msg: "user updated" });
    console.log(req.params);
    console.log({ ...req.body });
  } catch (error) {
    res.status(400).send({ msg: "could not update", error });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findOneAndRemove({ _id: id });
    res.send({ msg: "user deleted", deletedUser });
  } catch (error) {
    res.status(400).send({ msg: "could not delete", error });
  }
};
