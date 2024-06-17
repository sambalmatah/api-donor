const historySubmittedModels = require('../models/history-submitted.js');


const getHistorySubmitted = async (request, response) => {
    const { id } = request.params;

    try {
        
        const [ data ] = await historySubmittedModels.getHistorySubmitted(id);

        if (data.length === 0) {
            response.json({
                message: "no data",
                data: null
            });
    
        } else {
            response.json({
                message: "success",
                data: data
            });

        }
        
        
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