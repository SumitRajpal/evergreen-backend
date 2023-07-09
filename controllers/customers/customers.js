
const getCustomer = async (request, response) => {
    response.status(200).json({
      status: 200,
      response: "testing"
  }).end();
};


module.exports = {
    getCustomer
};