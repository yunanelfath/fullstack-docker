const config = require('./config');
const express = require('express');


const app = express();
require('./loaders')(app)

if(config.node_env !== 'test'){

  app.listen(config.port, err => {
    if (err) {
      process.exit(1);
      return;
    }
    console.log("Port opened at " + config.port);
  });
}

module.exports = app
