const express = require("express");
const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/product");
const router = express.Router();

router
  .route("/")
  .get(getProduct)
  .post(createProduct)
  .patch(updateProduct)
  .delete(deleteProduct);
router.route("/:name/:enno").get(getProductById);

module.exports = router;
