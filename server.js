const express = require('express');;
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 5000;

app.get('/products', (req, res) => {
  const { category_id_like, tags_like, type_id_like, size_like, color_like, price_gte, price_lte, _page } = req.query;


  const filter = {};

  if (category_id_like) {

    const selectedCategories = category_id_like.split('+');
    
    filter.category_id = { $in: selectedCategories };
  }

  if (tags_like) {
    filter.tags = { $in: tags_like.split('+') };
  }

  if (type_id_like) {
    filter.type_id = { $in: type_id_like.split('+') };
  }

  if (size_like) {
    filter.size = { $in: size_like.split('+') };
  }

  if (color_like) {
    filter.color = { $in: color_like.split('+') };
  }

  if (price_gte && price_lte) {
    filter.price = { $gte: +price_gte, $lte: +price_lte };
  }

  res.send('Filtered products');
});


app.use('/api', createProxyMiddleware({ target: 'http://localhost:4000', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
