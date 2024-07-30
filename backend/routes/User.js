const { Router } = require("express");
const { createUser, getUser, login , deleteAllUser , getAllUsers } = require("../controllers/UserController");
const { auth } = require("../middleware/auth");

const router = Router();
router.get('/allUsers', auth , getAllUsers) // for admin
router.get("/", auth , getUser) // for user and admin both
router.post("/", createUser); // for user and admin both
router.post("/login", login); // for user and admin both
router.delete('/',auth, deleteAllUser) // for admin
// router.delete('/:id' , deleteById) // for admin
// router.put('/:id' , updateUser) // for user and admin both
module.exports = router