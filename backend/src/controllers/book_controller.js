const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createBook = async (req, res) => {
  try {
    const { title, author, pages, startDate, genre } = req.body;

    const book = await prisma.book.create({
      data: {
        title,
        author,
        pages: parseInt(pages),
        startDate: new Date(startDate),
        genre,
      },
    });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a book" });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

module.exports = { createBook, getBooks };
