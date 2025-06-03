const express = require("express");
const router = express.Router();

router.get("/", getAllProjects);
router.get("/:slug", getSingleProject);

// Admin Only Routes
router.get("/new");
router.post("/new");

router.get("/:slug/update");
router.post("/:slug/update");

router.get("/:slug/delete");

module.exports = router;
