const express = require("express");
const { postJob, getAllJobs, getJobById, getAdminJobs } = require("../Controllers/jobController");
const { isAuthenticated } = require("../Middlewares/Authenticate");
const router = express.Router();

router.post("/post-job", isAuthenticated, postJob);
router.get("/get-all-jobs", isAuthenticated, getAllJobs);
router.get("/get-job/:id", isAuthenticated, getJobById)
router.get("/get-admin-jobs", isAuthenticated, getAdminJobs);

module.exports = router