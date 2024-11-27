const router = require("express").Router();
const { postAuth } = require("../controllers/postAutchCtrl");

router.post("/register", postAuth);

module.exports = router;
