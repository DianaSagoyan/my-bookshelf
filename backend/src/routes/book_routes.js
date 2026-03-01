const express = require("express");
const router = express.Router();
const path = require("path");
const { createBook, getBooks } = require("../controllers/book_controller");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../frontend/dist", "index.html"));
});

router.get("/book", (req, res) => {
  res.sendFile(path.join(__dirname, "../../../frontend/dist", "index.html"));
});

router.post("/api/books", createBook);
router.get("/api/books", getBooks);

module.exports = router;
