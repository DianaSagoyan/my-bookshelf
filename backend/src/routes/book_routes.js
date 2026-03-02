const express = require("express");
const router = express.Router();
const path = require("path");
const { createBook, getBooks } = require("../controllers/book_controller");
const { signup, login } = require("../controllers/auth_controller");

router.post("/api/books", createBook);
router.get("/api/books", getBooks);
router.post("/api/signup", signup);
router.post("api/lpgin", login);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../frontend/dist", "index.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../frontend/dist", "index.html"));
});

router.get("/book", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../frontend/dist", "index.html"));
});

module.exports = router;
