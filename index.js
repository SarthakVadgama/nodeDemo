const express = require("express");
const app = express();
const cors = require("cors");
const notFound = require("./middlewares/notFound");
const productRoutes = require("./routes/product");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/v1/product", productRoutes);

app.use(notFound);

const start = async () => {
  try {
    await mongoose.connect(process.env.CONSTR);
    app.listen(process.env.PORT);
    const sum = process.env.A + process.env.B;
    console.log(`Listening on port http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
};
start();
