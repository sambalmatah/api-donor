<<<<<<< HEAD
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
=======
const loginModels = require('../models/login.js');

const loginUser = async (request, response) => {
    const { email, password } = request.body;

    try {
        const [ data ] = await loginModels.loginUser(email, password);
        
        if (!data) {
            response.status(400).json({
                message: "Login Invalid",
                data: null,
            })
        }

        response.json({
            message: "login berhasil",
            data: data
        })
    } catch (error) {
        response.status(500).json({
            message: "Server Error",
            serverMessage: error
        })
    }
}



module.exports = {
    loginUser,
}
>>>>>>> f404151f18ff7303a2e9ae3de01b15cf6c2f632a
