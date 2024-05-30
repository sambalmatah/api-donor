const dbPool = require('../config/database.js');

const getAllUserDetails = () => {
    const SQLQuery = `SELECT * FROM user_details`;

    return dbPool.execute(SQLQuery);
}

const createNewUserDetails = (body) => {
    const SQLQuery = `  INSERT INTO user_details (id_user, kontak_telp, photo, gol_darah, resus_gol_darah, usia, berat_badan, tinggi_badan, jenis_kelamin)
                        VALUES (${body.id_user}, '${body.kontak_telp}', '${body.photo}', '${body.gol_darah}', '${body.resus_gol_darah}', ${body.usia}, ${body.berat_badan}, ${body.tinggi_badan}, '${body.jenis_kelamin}')`;

    return dbPool.execute(SQLQuery);
}

const updateUserDetails = (body, id) => {
    // const SQLQuery = `  UPDATE user_details
    //                     SET kontak_telp='${body.kontak_telp}', gol_darah='${body.gol_darah}', resus_gol_darah='${body.resus_gol_darah}', usia=${body.usia}, berat_badan=${body.berat_badan}, tinggi_badan=${body.tinggi_badan}, jenis_kelamin='${body.jenis_kelamin}'
    //                     WHERE id_user=${id}`;

    const SQLQuery =`   UPDATE user_details
                        SET kontak_telp='${body.kontak_telp}', gol_darah='${body.gol_darah}', resus_gol_darah='${body.resus_gol_darah}', usia=${body.usia}, berat_badan=${body.berat_badan}, tinggi_badan=${body.tinggi_badan}, jenis_kelamin='${body.jenis_kelamin}'
                        WHERE id_user=${id}`;

    return dbPool.execute(SQLQuery);
}

const deleteUserDetials = (id) => {
    const SQLQuery = `DELETE FROM user_details
                        WHERE id_user=${id}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllUserDetails,
    createNewUserDetails,
    updateUserDetails,
    deleteUserDetials,
}