const express = require("express");
const { randomUUID } = require("crypto");
const app = express();
app.use(express.json());

const products = [];
app.post("/product", (req, res) => {
  const { name, price } = req.body;
  const product = { name, price, id: randomUUID() };
  products.push(product);
  return res.json(product);
});

app.get("/products", (req, res) => {
  return res.json(products);
});

app.get("/product/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((product) => product.id === id);
  return res.json(product);
});

app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const productIndex = products.findIndex((product) => product.id === id);
  console.log(productIndex);
  if (productIndex >= 0) {
    const oldProduct = products[productIndex];
    products[productIndex] = {
      name: name || oldProduct.name,
      price: price || oldProduct.price,
      id,
    };
    return res.json({ message: "Done", "new product": products[productIndex] });
  }
  return res.status(400).json({ message: "Id not found" });
});

app.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((product) => product.id === id);
  products.splice(productIndex, 1);
  return res.json({ message: "Done" });
});
app.listen(4002, () => console.log("listening on port 4002"));
