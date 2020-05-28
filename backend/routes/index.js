const express = require('express');


module.exports = function() {
  const app = express.Router();

  require('./list.router')(app);


  return app;
};
