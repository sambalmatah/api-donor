const dbPool = require('../config/database.js');

const getAllTransactions = () => {
    const SQLQuery = `SELECT * FROM donor_transactions`;

    return dbPool.execute(SQLQuery);
}

const createNewTransaction = (body) => {
    const SQLQuery = `  INSERT INTO donor_transactions (id_user_pemohon, nama_pemohon, nama_penerima, nik_penerima, tanggal_dibuat, tanggal_dibutuhkan, gol_darah_dibutuhkan, jumlah_mililiter, lokasi, nama_rs)
                        VALUES (${body.id_user_pemohon}, '${body.nama_pemohon}', '${body.nama_penerima}', '${body.nik_penerima}', '${body.tanggal_dibuat}', '${body.tanggal_dibutuhkan}', '${body.gol_darah_dibutuhkan}', ${body.jumlah_mililiter}, '${body.lokasi}', '${body.nama_rs}')`;

    return dbPool.execute(SQLQuery);
}

const updateTransaction = (body, id) => {
    const SQLQuery = `UPDATE donor_transactions
                        SET nama_penerima='${body.nama_penerima}', nik_penerima='${body.nik_penerima}', tanggal_dibuat='${body.tanggal_dibuat}', tanggal_dibutuhkan='${body.tanggal_dibutuhkan}', gol_darah_dibutuhkan='${body.gol_darah_dibutuhkan}', jumlah_mililiter=${body.jumlah_mililiter}, lokasi='${body.lokasi}', nama_rs='${body.nama_rs}'
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}

const deleteTransaction = (id) => {
    const SQLQuery = `DELETE FROM donor_transactions
                        WHERE id=${id}`;

    return dbPool.execute(SQLQuery);
}



module.exports = {
    getAllTransactions,
    createNewTransaction,
    updateTransaction,
    deleteTransaction,
}