const getProduct = (req, res) => {
  res.json({ msg: "Get all products" });
};
const createProduct = (req, res) => {
  res.json({ msg: "Create new product" });
};
const updateProduct = (req, res) => {
  res.json({ msg: "Update a product" });
};
const deleteProduct = (req, res) => {
  res.json({ msg: "Delete a product" });
};

const getProductById = (req, res) => {
  const { name, enno } = req.params;
  res.json({ name, enno, msg: "Get product by name" });
};

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
