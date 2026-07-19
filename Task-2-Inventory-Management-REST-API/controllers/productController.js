const products = require("../data/products");

// Get all products
const getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    count: products.length,
    data: products
  });
};

// Get product by ID
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  res.status(200).json({
    success: true,
    data: product
  });
};

// Create new product
const createProduct = (req, res) => {
  const {
    sku,
    name,
    category,
    brand,
    price,
    quantity,
    supplier,
    status
  } = req.body;

  if (
    !sku ||
    !name ||
    !category ||
    !brand ||
    !price ||
    quantity === undefined ||
    !supplier ||
    !status
  ) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields"
    });
  }

  const newProduct = {
    id: products.length + 1,
    sku,
    name,
    category,
    brand,
    price,
    quantity,
    supplier,
    status
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Product added successfully",
    data: newProduct
  });
};

// Update product
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  const {
    sku,
    name,
    category,
    brand,
    price,
    quantity,
    supplier,
    status
  } = req.body;

  product.sku = sku ?? product.sku;
  product.name = name ?? product.name;
  product.category = category ?? product.category;
  product.brand = brand ?? product.brand;
  product.price = price ?? product.price;
  product.quantity = quantity ?? product.quantity;
  product.supplier = supplier ?? product.supplier;
  product.status = status ?? product.status;

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: product
  });
};


// Delete product
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);

  const index = products.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Product not found"
    });
  }

  const deletedProduct = products.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
    data: deletedProduct[0]
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};