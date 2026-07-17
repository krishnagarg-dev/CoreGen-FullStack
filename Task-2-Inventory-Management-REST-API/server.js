// Import Express framework
const express = require("express");

// Import CORS package
const cors = require("cors");

// Import Product Routes
const productRoutes = require("./routes/productRoutes");

// Create Express application
const app = express();

// Define Port
const PORT = 5000;

// =======================
// Middleware
// =======================

app.use(cors());

app.use(express.json());

// =======================
// Routes
// =======================

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Inventory Management REST API is running...");
});

// Product Routes
app.use("/api/products", productRoutes);

// =======================
// Start Server
// =======================

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});