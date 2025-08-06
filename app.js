const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// create simple get request handler
app.get('/', (req, res) => {
  return res.send('Welcome To Shopeasy from Taxport!');
});
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports ={app,server};