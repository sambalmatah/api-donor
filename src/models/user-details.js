const dbPool = require('../config/database.js');

const getAllUserDetails = () => {
    const SQLQuery = `SELECT * FROM users`;

    return dbPool.execute(SQLQuery);
}

// const createNewUserDetails = (body) => {
//     const SQLQuery = `  INSERT INTO users (status_donor, kontak_telp, photo_name, gol_darah, usia, berat_badan, tinggi_badan, jenis_kelamin, lokasi)
//                         VALUES (${body.status_donor}, '${body.kontak_telp}', '${body.photo_name}', '${body.gol_darah}', ${body.usia}, ${body.berat_badan}, ${body.tinggi_badan}, '${body.jenis_kelamin}', '${body.lokasi}')`;

//     return dbPool.execute(SQLQuery);
// }

const updateUserDetails = (body, id) => {
    const SQLQuery =`   UPDATE users
                        SET status_donor='${body.status_donor}', kontak_telp='${body.kontak_telp}', gol_darah='${body.gol_darah}', usia=${body.usia}, berat_badan=${body.berat_badan}, tinggi_badan=${body.tinggi_badan}, jenis_kelamin='${body.jenis_kelamin}', lokasi='${body.lokasi}'
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllUserDetails,
    updateUserDetails,
}