// PANGGIL SOURCE

require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const userRouters = require('./routers/users.js');
const logMiddleware = require('./middleware/logs.js');
const upload = require('./middleware/multer.js');



// Membuat variable fungsi express

const app = express();

// EKSEKUSI API

app.use(logMiddleware);
app.use(express.json()); // mengizinkan request body berupa json

app.use('/assets', express.static('public/profiles')) // mengizinkan menyimpan gambar ke dalam folder

app.use('/users', userRouters);

app.post('/upload', upload.single('photo'), (request, response) => { //fungsi upload gambar
    response.json({
        message: 'Upload berhasil'
    })
})

app.use((error, request, response, next) => {
    response.json({
        message: error.message
    })
})

// Membuka Portal 4000 (harus ada)
app.listen(PORT, () => {
    console.log(`menjalankan server ${PORT}`)
});