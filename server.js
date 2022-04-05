const { createServer } = require("http");
const express = require("express");
const routes = require("./routes");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();
const cors = require("CORS");

app.use(express.json());
app.use(cors());
app.use(routes);

const server = createServer(app);
const PORT = process.env.PORT;

const start = async () => {
  try {
    server.listen(PORT, () => console.log("Server is listening on " + PORT));
  } catch (err) {
    await prisma.$disconnect();
  }
};

start();
