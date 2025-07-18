const express = require("express");
const { isAuthenticated } = require("../Middlewares/Authenticate");
const { applyJob, getAppliedJobs, getApplicants, updateStatus } = require("../Controllers/applicationController");
const router = express.Router();

router.post("/apply/:id", isAuthenticated, applyJob);
router.get("/applied-jobs", isAuthenticated, getAppliedJobs);

// Only for admin
router.get("/get-applicants/:id", isAuthenticated, getApplicants);
router.put("/update-application-status/:id", isAuthenticated, updateStatus);

module.exports = router