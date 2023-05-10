const Users = require("./../model/userModel");

const createUser = async (req, res) => {
  try {
    const { user_name, content } = req.body;
    const userData = await Users.findOne({ user_name });
    let data = null;
    if (!userData) {
      data = await Users.create({ user_name, content, isEdited: false });
    }
    res.status(201).json({
      status: "Success",
      data: data ? data : userData,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
const getUserByUserName = async (req, res) => {
  try {
    const { user_name } = req.params;
    console.log(user_name);
    const data = await Users.findOne({ user_name });
    console.log(data);
    res.status(201).json({
      status: "Success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};

const editUserByUserName = async (req, res) => {
  try {
    const { user_name } = req.params;
    const { content } = req.body;
    const data = await Users.findOneAndUpdate(
      { user_name },
      { content, isEdited: true }
    );
    res.status(201).json({
      status: "success",
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: "Fail",
      message: error.message,
    });
  }
};
module.exports = { createUser, getUserByUserName, editUserByUserName };
