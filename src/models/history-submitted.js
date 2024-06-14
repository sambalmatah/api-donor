const dbPool = require('../config/database.js');

const getHistorySubmitted = (id) => {
    const SQLQuery = `
                        SELECT donor_transactions.id AS transaction_id, donor_transactions.id_user_pemohon, donor_transactions.nama_pemohon, donor_transactions.nama_penerima, donor_transactions.nik_penerima, donor_transactions.tanggal_dibuat, donor_transactions.tanggal_dibutuhkan, donor_transactions.gol_darah_dibutuhkan, donor_transactions.jumlah_mililiter, donor_transactions.lokasi, donor_transactions.nama_rs, donor_transaction_details.id AS id_detail, donor_transaction_details.id_user_pendonor, donor_transaction_details.nama_pendonor, donor_transaction_details.tanggal_kontribusi, users.email, users.kontak_telp, users.gol_darah, users.lokasi AS lokasi_user 
                        FROM donor_transaction_details 
                        LEFT JOIN donor_transactions ON donor_transaction_details.id_trx = donor_transactions.id 
                        LEFT JOIN users ON donor_transaction_details.id_user_pendonor = users.id
                        WHERE donor_transaction_details.id_user_pendonor = ${id}`;
    
    return dbPool.execute(SQLQuery);
}



module.exports = {
    getHistorySubmitted,
}