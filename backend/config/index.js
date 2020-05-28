const dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

let config = {
  port: parseInt(process.env.PORT, 10),
  node_env: process.env.NODE_ENV,
  api: {
    prefix: process.env.API_PREFIX
  },
};

module.exports = config;
