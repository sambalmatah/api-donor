const dbPool = require('../config/database.js');

const getAllTransactionDetails = () => {
    const SQLQuery = `SELECT * FROM donor_transaction_details`;

    return dbPool.execute(SQLQuery);
}

const createTransactionDetails = (body) => {
    const SQLQuery = `INSERT INTO donor_transaction_details (id_trx, id_user_pendonor, nama_pendonor, tanggal_kontribusi)
                        VALUES (${body.id_trx}, ${body.id_user_pendonor}, '${body.nama_pendonor}', '${body.tanggal_kontribusi}')`;

    return dbPool.execute(SQLQuery);
}

const updateTransactionDetails = (body, id) => {
    const SQLQuery = `UPDATE donor_transaction_details
                        SET tanggal_kontribusi='${body.tanggal_kontribusi}'
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

const deleteTransactionDetails = (id) => {
    const SQLQuery = `DELETE FROM donor_transaction_details
                        WHERE id=${id}`;
    
    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllTransactionDetails,
    createTransactionDetails,
    updateTransactionDetails,
    deleteTransactionDetails,
}