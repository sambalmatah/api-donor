const loginModels = require("../models/login.js");
const jwt = require('jsonwebtoken');

const loginUser = async (request, response) => {
  const { body } = request;

  try {
    const [[ data ]] = await loginModels.loginUser(body); //membuat double destructuring agar id langsung diterima

    if (data.length === 0) {
      response.status(400).json({
        message: "Login Invalid",
        data: null,
      });
      } else {
      const token = jwt.sign({ id: data.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      response.json({
        token,
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  loginUser,
};
