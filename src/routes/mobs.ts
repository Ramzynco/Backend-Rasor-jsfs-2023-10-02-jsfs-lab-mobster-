import express from "express";
const router = express.Router();

/* GET mobs listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource");
});

export default router;
