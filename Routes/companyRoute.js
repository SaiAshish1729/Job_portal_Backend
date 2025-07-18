const express = require("express");
const { isAuthenticated } = require("../Middlewares/Authenticate");
const { registerCompany, getCompany, getCompanyById, updateCompany } = require("../Controllers/companyController");
const router = express.Router();

router.post("/register-company", isAuthenticated, registerCompany);
router.get("/get-company", isAuthenticated, getCompany);
router.get("/get-company/:id", isAuthenticated, getCompanyById)
router.put("/update-company/:id", isAuthenticated, updateCompany);

module.exports = router