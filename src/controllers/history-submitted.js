const historySubmittedModels = require('../models/history-submitted.js');


const getHistorySubmitted = async (request, response) => {
    const { id } = request.params;

    try {
        
        const [ data ] = await historySubmittedModels.getHistorySubmitted(id);
        
        response.json({
            message: "success",
            data: data
        });
        
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    };
};



module.exports = {
    getHistorySubmitted,
}