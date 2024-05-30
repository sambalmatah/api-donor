const donorTransactionDetailModuls = require('../models/donor-transaction-details.js');

const getAllTransactionDetails = async (request, response) => {

    try {
        const [ data ] = await donorTransactionDetailModuls.getAllTransactionDetails();
        response.json({
            message: 'GET all donor-transaction-details success',
            data: data
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createTransactionDetails = async (request, response) => {
    const { body } = request;

    try {
        await donorTransactionDetailModuls.createTransactionDetails(body);
        response.status(201).json({
            message: 'CREATE new donor-transaction-details success',
            data: request.body
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateTransactionDetails = async (request, response) => {
    const { id } = request.params;
    const { body } = request;

    try {
        await donorTransactionDetailModuls.updateTransactionDetails(body, id);
        response.json({
            message: 'UPDATE donor-transaction-details success',
            data: request.body
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteTransactionDetails = async (request, response) => {
    const { id } = request.params;
    
    try {
        await donorTransactionDetailModuls.deleteTransactionDetails(id);
        response.json({
            message: 'DELETE donor-transaction-details success',
            id: id
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}



module.exports = {
    getAllTransactionDetails,
    createTransactionDetails,
    updateTransactionDetails,
    deleteTransactionDetails,
}