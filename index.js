const express = require("express");
const app = express();
const cors = require("cors");
const notFound = require("./middlewares/notFound");
const productRoutes = require("./routes/product");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/v1/product", productRoutes);

app.use(notFound);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port http://localhost:${process.env.PORT}`);
});
