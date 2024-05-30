const donorTransactionModels = require('../models/donor_transactions.js');

const getAllTransactions = async (request, response) => {
    
    try {
        const [ data ] = await donorTransactionModels.getAllTransactions();

        response.json({
            message: 'GET all donor-transactions success',
            data: data
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const createNewTransaction = async (request, response) => {
    const { body } = request;

    try {
        await donorTransactionModels.createNewTransaction(body);
        response.json({
            message: 'CREATE new donor-transaction success',
            data: request.body
        })
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const updateTransaction = async (request, response) => {
    const { id } = request.params;
    const { body } = request;

    try {
        await donorTransactionModels.updateTransaction(body, id);
        response.json({
            message: 'UPDATE donor-transaction success',
            data: {
                id: id,
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

const deleteTransaction = async (request, response) => {
    const { id } = request.params;

    try {
        await donorTransactionModels.deleteTransaction(id);
        response.json({
            message: 'DELETE donor-transaction success',
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
    getAllTransactions,
    createNewTransaction,
    updateTransaction,
    deleteTransaction,
}