const usersModels = require('../models/users.js');

const getAllUsers = async (request, response) => {
    
    try {
        const [ data ] = await usersModels.getAllUsers();
    
        response.json({
            message: 'GET all users success',
            data: data
        })
        
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMassage: error
        })
        
    }
};

const createNewUser = (request, response) => {
    console.log(request.body)
    response.json({
        message: 'CREATE new user succes',
        data: request.body
    })
};

const updateUser = (request, response) => {
    const { id } = request.params;
    console.log(id);
    response.json({
        message: 'UPDATE user success',
        data: request.body
    })
};

const deleteUser = (request, response) => {
    const { id } =request.params;
    console.log(id);
    response.json({
        message: 'DELETE user success',
        data: {
            id: id,
            name: "yudi",
            email: "yudi@gmail.com"
        }
    })
} 

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}