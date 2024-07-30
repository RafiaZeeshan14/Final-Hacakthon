const User = require("../models/user");
var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const admin = process.env.adminID
// console.log("🚀 ~ admin:", admin)

// Create User
const createUser = async (req, res) => {
  // console.log("request body" , req.body)
  const { name, email, password, rollNo, course, batch } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const result = await User.create({
    name,
    email,
    password: hashPassword,
    rollNo,
    course,
    batch
  });
  res.send({ status: 200, data: result, message: "user created successfuly" });
};

// Get All Users // for admin
const getAllUsers = async (req, res) => {
  try {
    console.log('I am in get user request', req.user.id);
    if (req.user.id === admin) {
      console.log("yes")
      const result = await User.find();
      // console.log("🚀 ~ getUser ~ result:", result)
      res.send({ status: 200, data: result });
    } else {
      res.send({ status: 400, message: "You are not authorized" });

    }
  }
  catch (error) {
    console.error("Error in getUser:", error);
    res.send({ status: 500, message: "Internal Server Error" });
  }
};

// Get 1  Users
const getUser = async (req, res) => {
  console.log("in get users")
  try {
    console.log('I am in get user request', req.user.id);
    const result = await User.findById(req.user.id);
    console.log("🚀 ~ getUser ~ result:", result);

    if (result) {
      res.send({ status: 200, data: result });
    } else {
      res.send({ status: 404, message: "User not found" });
    }
  }
  catch (error) {
    console.error("Error in getUser:", error);
    res.send({ status: 500, message: "Internal Server Error" });
  }
}


// Login specific user using token
const login = async (req, res) => {
  console.log("iminlogin")
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  // console.log("🚀 ~ login ~ user:", user)
  if (!user) {
    res.send({ status: 404, data: "no user is found" });
  } else {
    bcrypt.compare(password, user?.password, async function (err, resp) {
      console.log(resp)
      if (resp) {
        // logic
        const obj = {
          id: user._id,
          email: user.email,
          name: user.name
        }
        const token = await jwt.sign(obj, process.env.JWT_SECRET)
        console.log("token", token)
        res.send({ status: 200, token: token, message: "user logged in" });
      } else {
        res.send({ status: 400, message: "user pass incorrect" });
      }
    });
  }

};

const deleteAllUser = async (req, res) => {
  try {
    console.log('I am in delete user', req.user.id);
    if (req.user.id === admin) {
      console.log("yes")
      const result = await User.deleteMany({ _id: { $ne: req.user.id } });
      res.send({ status: 200, data: result, message: 'All non-admin users deleted' });
    }
  }
  catch (error) {
    console.error("Error in deleteAllUser:", error);
    res.send({ status: 500, message: "Internal Server Error" });
  }
}

module.exports = {
  createUser,
  getUser,
  login,
  deleteAllUser,
  getAllUsers
};
