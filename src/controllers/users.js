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

const createNewUser = async (request, response) => {
    const { body } = request;

    try {
        await usersModels.createNewUser(body);
        response.json({
            message: 'CREATE new user succes',
            data: request.body
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMassage: error
        })
    }
};

const updateUser = async (request, response) => {
    const { id } = request.params;
    const { body } = request;

    try {
        await usersModels.updateUser(body, id);
        response.json({
            message: 'UPDATE user success',
            data: {
                id: id,
                ...body
            }
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMassage: error
        })
    }
};

const deleteUser = async (request, response) => {
    const { id } =request.params;

    try {
        await usersModels.deleteUser(id)
        response.json({
            message: 'DELETE user success',
            data: null
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMassage: error
        })
    }
} 

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}