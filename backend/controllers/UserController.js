const User = require("../models/user");
var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};


// Create User
const createUser = async (req, res) => {
  // // console.log("request body" , req.body)
  try {
    const { name, email, password, rollNo, course, batch, preference } = req.body;
    // Capitalize the user's name
    const capitalizedName = capitalizeFirstLetter(name);
    // console.log("🚀 ~ createUser ~ email:", email)
    const usedEmail = await User.findOne({ email })
    // console.log("🚀 ~ createUser ~ usedEmail:", usedEmail)
    if (usedEmail) {
      throw new Error("Email already in use");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const result = await User.create({
        name: capitalizedName,
        email,
        password: hashPassword,
        rollNo,
        course,
        batch,
        preference
      });
      res.status(200).json({ data: result, message: "user created successfuly" });
    }
  } catch (error) {
      res.status(400).send({ message: error.message });
  };

}

// Get All Users // for admin


// Get 1  Users
const getUser = async (req, res) => {
  console.log("in get users")
  try {
    console.log('I am in get user request', req.user.id);
    const result = await User.findById(req.user.id);
    console.log("🚀 ~ getUser ~ result:", result);

    if (result) {
      // Capitalize the user's name in the response
      result.name = capitalizeFirstLetter(result.name);
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
      // console.log(resp)
      if (resp) {
        // logic
        const obj = {
          id: user._id,
          email: user.email,
          name: user.name,
          preference: user.preference
        }
        const token = await jwt.sign(obj, process.env.JWT_SECRET)
        // console.log("token", token)
        res.send({ status: 200, token: token, data: obj.preference, message: "user logged in" });
      } else {
        res.send({ status: 400, message: "user pass incorrect" });
      }
    });
  }

};



module.exports = {
  createUser,
  getUser,
  login,
};
