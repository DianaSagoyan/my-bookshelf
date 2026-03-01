const express = require("express");
// const { PrismaClient } = require("@prisma/client");
const path = require("path");
const bcrypt = require("bcrypt");
const router = require("./routes/book_routes");
require("dotenv").config();
// const collection = require("./config");

const app = express();
// const prisma = new PrismaClient();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.use("/", router);

// app.post("/users", async (req, res) => {
//   const { name, password } = req.body;
//   const user = await prisma.user.create({
//     data: { name, password },
//   });
//   res.json(user);
// });

// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany;
//   res.json(users);
// });

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
