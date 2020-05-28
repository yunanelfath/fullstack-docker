const listController = require('../controllers/list.controller');

module.exports = (router) => {
  router.get("/hi", listController.greeting)
}
