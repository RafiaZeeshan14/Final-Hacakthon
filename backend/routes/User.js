const { Router } = require("express");
const { createUser, getUser, login } = require("../controllers/UserController");
const { getAllUsers, deleteUser, getUsersByCourse } = require("../controllers/AdminController");
const { auth } = require("../middleware/auth");

const router = Router();
router.post("/", createUser); 
router.post("/login", login);
// router.put('/:id' , updateUser) // for user and admin both

// for user
router.get("/", auth , getUser) 
 
 // for admin
router.get('/allUsers', auth , getAllUsers) 
router.get('/userByCourse', auth, getUsersByCourse)

// router.delete('/',auth, deleteUser) 
// router.delete('/:id' , deleteById) // for admin
module.exports = router