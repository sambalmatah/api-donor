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