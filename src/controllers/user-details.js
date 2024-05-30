const userDetailsModel = require('../models/user-details.js');

const getAllUserDetails = async (request, response) => {

    try {
        const [ data ] = await userDetailsModel.getAllUserDetails();

        response.json({
            message: 'GET all user-details success',
            data: data
        })

    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
};

const createNewUserDetails = async (request, response) => {
    const { body } = request;

    try {
        await userDetailsModel.createNewUserDetails(body);
        response.status(201).json({
            message: 'CREATE new user-details success',
            data: request.body
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
};

const updateUserDetails = async (request, response) => {
    const { id } = request.params;
    const { body } = request;

    try {
        await userDetailsModel.updateUserDetails(body, id);
        response.json({
            message: 'UPDATE user-details success',
            data: {
                id_user: id,
                ...body
            }
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteUserDetials = async (request, response) => {
    const { id } = request.params;

    try {
        await userDetailsModel.deleteUserDetials(id);
        response.json({
            message: 'DELETE user-detail success',
            data: id
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}



module.exports = {
    getAllUserDetails,
    createNewUserDetails,
    updateUserDetails,
    deleteUserDetials,
}