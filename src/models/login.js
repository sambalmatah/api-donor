const dbPool = require('../config/database.js');

const loginUser = (email, password) => {
    const SQLQuery = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    loginUser,
}