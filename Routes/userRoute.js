const express = require("express");
const { registerUser, userLogin, logout, updateProfile } = require("../Controllers/userController");
const { isAuthenticated } = require("../Middlewares/Authenticate");
const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login", userLogin);
router.get("/logout", logout)
router.put("/update-profile", isAuthenticated, updateProfile);

module.exports = router