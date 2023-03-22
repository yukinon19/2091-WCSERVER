//Pangilinan, Jenna Ella P.       WD - 201
const express = require('express');
const app = express();

const dishes = [
  {
    Type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    Type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    Type: 'Baget',
    province: 'Ilocos',
    price: 370,
  },
];

app.get('/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/dishes/:searchParam', (req, res) => {
  const searchParam = req.params.searchParam;
  const dish = dishes.find(
    (m) =>
      m.Type.toLowerCase().includes(searchParam.toLowerCase()) ||
      m.province.toLowerCase().includes(searchParam.toLowerCase()) ||
      m.price === parseInt(searchParam)
  );
  if (!dish) return res.status(404).send('Record not found');
  res.send(dish);
});

app.listen(3000, () => console.log('Listening on port 3000'));
