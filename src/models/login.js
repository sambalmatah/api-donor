const dbPool = require("../config/database.js");

const loginUser = (body) => {
  const SQLQuery = `SELECT * FROM users WHERE email='${body.email}' AND password='${body.password}'`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  loginUser,
};
