// Temporary in-memory database

const products = [
  {
    id: 1,
    sku: "SKU001",
    name: "Wireless Mouse",
    category: "Electronics",
    brand: "Logitech",
    price: 899,
    quantity: 25,
    supplier: "ABC Traders",
    status: "In Stock"
  },
  {
    id: 2,
    sku: "SKU002",
    name: "Mechanical Keyboard",
    category: "Electronics",
    brand: "Redragon",
    price: 2499,
    quantity: 15,
    supplier: "XYZ Distributors",
    status: "In Stock"
  },
  {
    id: 3,
    sku: "SKU003",
    name: "Gaming Headset",
    category: "Accessories",
    brand: "HyperX",
    price: 3999,
    quantity: 8,
    supplier: "Gaming World",
    status: "Low Stock"
  }
];

module.exports = products;