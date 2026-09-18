// Express Routes following MVC pattern
// Declares paths for Applications endpoints
const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");

router.route("/")
  .get(applicationController.getApplications)
  .post(applicationController.createApplication);

router.route("/:id/status")
  .patch(applicationController.updateApplicationStatus);

router.route("/:id")
  .delete(applicationController.deleteApplication);

module.exports = router;
