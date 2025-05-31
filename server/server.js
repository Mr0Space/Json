const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/product', (req, res) => {
  const product = {
    id: 1,
    name: "Ноутбук",
    price: 45000,
    inStock: true
  };
  res.json(product);
});

app.use(express.json()); 

app.post('/api/product', (req, res) => {
    const newProduct = req.body;
  
    console.log('Новый продукт:', newProduct);
    res.status(201).json(newProduct);
});


app.listen(3000, () => console.log('Сервер запущен на http://localhost:3000'));
