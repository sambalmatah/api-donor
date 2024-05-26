const dbPool = require('../config/database.js');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO users (nama, email, nik, password, status)
                        VALUES ('${body.nama}', '${body.email}', '${body.nik}', '${body.password}', '${body.status}')`;

    return dbPool.execute(SQLQuery);
}

const updateUser = (body, id) => {
    const SQLQuery = `  UPDATE users
                        SET nama='${body.nama}', email='${body.email}', nik='${body.nik}'
                        WHERE id='${id}'`

    return dbPool.execute(SQLQuery);
}

const deleteUser = (id) => {
    const SQLQuery = `  DELETE FROM users
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}