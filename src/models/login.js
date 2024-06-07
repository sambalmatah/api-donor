<<<<<<< HEAD
const dbPool = require("../config/database.js");

const loginUser = (body) => {
  const SQLQuery = `SELECT * FROM users WHERE email='${body.email}' AND password='${body.password}'`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  loginUser,
};
=======
const dbPool = require('../config/database.js');

const loginUser = (request, response) => {
    const SQLQuery = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    loginUser,
}
>>>>>>> f404151f18ff7303a2e9ae3de01b15cf6c2f632a
