// PANGGIL SOURCE

require('dotenv').config()
const PORT = process.env.PORT || 5000;
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
app.listen(PORT, () => {
    console.log(`menjalankan server ${PORT}`)
});