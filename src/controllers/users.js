const getAllUsers = (request, response) => {
    const data = {
        id: '1',
        name: "yudi ari",
        email: "yudiari@gmail.com"
    }
    response.json({
        message: 'GET all users success',
        data: data
    })
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