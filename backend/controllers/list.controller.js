const controller = {
  greeting: async function(req, res) {
    return res.status(200).json({
      status: 'success',
      result: 'hello world'
    });
  },

}

module.exports = controller
