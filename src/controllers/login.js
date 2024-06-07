const loginModels = require("../models/login.js");

const loginUser = async (request, response) => {
  const { body } = request;

  try {
    const [data] = await loginModels.loginUser(body);

    if (data.length === 0) {
      response.status(400).json({
        message: "Login Invalid",
        data: null,
      });
    } else {
      response.json({
        message: "login berhasil",
        data: data,
      });
    }
  } catch (error) {
    response.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  loginUser,
};
