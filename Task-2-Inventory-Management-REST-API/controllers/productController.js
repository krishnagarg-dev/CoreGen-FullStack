const products = require("../data/products");

// Get all products
const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
};

module.exports = {
  getAllProducts
};