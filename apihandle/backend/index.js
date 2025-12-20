import express from "express";

const app = express();

const port = process.env.PORT || 5000;

app.get("/api/getProducts", async (req, res) => {
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 799,
      stock: 25,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 3499,
      stock: 12,
    },
    {
      id: 3,
      name: "USB-C Charger",
      price: 1199,
      stock: 40,
    },
    {
      id: 4,
      name: "Bluetooth Headphones",
      price: 2599,
      stock: 18,
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 1499,
      stock: 30,
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 1000);
});
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
