// PANGGIL SOURCE

const express = require('express');
const userRouters = require('./routers/users.js');
const logMiddleware = require('./middleware/logs.js');


// Membuat variable fungsi express

const app = express();

// EKSEKUSI API

app.use(logMiddleware);
app.use(express.json()); // mengizinkan request body berupa json

app.use('/users', userRouters);

// Membuka Portal 4000 (harus ada)
app.listen(4000, () => {
    console.log('menjalankan server')
});