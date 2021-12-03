const express = require("express");
const connectDB = require("./config/db");
const app = express();
const apiRouter = require("./routers");

connectDB();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/", apiRouter);

app.listen(PORT, () => {
  console.log("server is up and running...");
});
