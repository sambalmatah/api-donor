const riwayatProfileModels = require('../models/riyawat-profile.js');


const getHistoryTransactions = async (request, response) => {
    const { id } = request.params;

    try {
        
        const [ riwayat ] = await riwayatProfileModels.getHistoryTransactions(id);
        
        const transactionMap = new Map();

        riwayat.forEach(row => {
            if (!transactionMap.has(row.transaction_id)) {
                transactionMap.set(row.transaction_id, {

                    transaction_id: row.transaction_id,
                    id_user_pemohon: row.id_user_pemohon,
                    nama_pemohon: row.nama_pemohon,
                    nama_penerima: row.nama_penerima,
                    nik_penerima: row.nik_penerima,
                    tanggal_dibuat: row.tanggal_dibuat, 
                    tanggal_dibutuhkan: row.tanggal_dibutuhkan, 
                    gol_darah_dibutuhkan: row.gol_darah_dibutuhkan, 
                    jumlah_mililiter: row.jumlah_mililiter,
                    lokasi: row.lokasi,
                    nama_rs: row.nama_rs,
                    detail: []
                });
            }
            
            transactionMap.get(row.transaction_id).detail.push({
                id_detail: row.id_detail,
                id_user_pendonor: row.id_user_pendonor, 
                nama_pendonor: row.nama_pendonor,
                tanggal_kontribusi: row.tanggal_kontribusi, 
                email: row.email,
                kontak_telp: row.kontak_telp,
                gol_darah: row.gol_darah

            });
        });

        const data = Array.from(transactionMap.values());

        response.json({
            message: "success",
            data: data
        });
        
    } catch (error) {
        response.status(500).json({
            message: 'Server Error',
            serverMessage: error
        });
    };
};



module.exports = {
    getHistoryTransactions,
}