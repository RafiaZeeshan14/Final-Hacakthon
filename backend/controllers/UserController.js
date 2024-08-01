const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const admin = process.env.adminID

// to Capital first letter


// Create User
const createUser = async (req, res) => {
  try {
    const { name, email, password, rollNo, course, batch } = req.body;

    // Capitalize the user's name

    // To check existingEmail
    const existingEmail = await User.findOne({ email })

    if (existingEmail) {
      throw new Error("Email already in use");
    } else {
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
    }
  } catch (error) {
    if (error.message === "Email already in use") {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).send({ message: error.message });
    }
  };
}

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
      res.send({ status: 401, message: "You are not authorized" });
    }
  }
  catch (error) {
    res.send({ status: 500, message: error.message });
  }
};

// Get 1  Users
const getUser = async (req, res) => {
  try {
    const result = await User.findById(req.user.id);
    // console.log("🚀 ~ getUser ~ result:", result);

    if (result) {
      res.send({ status: 200, data: result });
    } else {
      throw new Error('User not found')
    }
  }
  catch (error) {
    if (error.message === "User not found") {
      res.status(400).send({ message: error.message });
    } else {
      res.status(500).send({ message: error.message });
    }
  }
}


// Login specific user using token
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    // console.log("🚀 ~ login ~ user:", user)

    if (!user) {
      res.send({ status: 404, data: "User not found" });
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
          res.send({ status: 200, token: token, message: "User logged in" });
        } else {
          res.send({ status: 400, message: "User password incorrect" });
        }
      });

    }

  } catch (error) {
    res.status(500).send({message: error.message})
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
