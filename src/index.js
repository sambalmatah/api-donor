// PANGGIL SOURCE

const express = require('express');
const userRouters = require('./routers/users.js');
const logMiddleware = require('./middleware/logs.js');

const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'donorin',
});



// Membuat variable fungsi express

const app = express();

// EKSEKUSI API

app.use(logMiddleware);
app.use(express.json()); // mengizinkan request body berupa json

app.use('/users', userRouters);


app.use('/', (request, response) => {
    dbPool.execute('SELECT * FROM users', (error, rows) => {
        if (error) {
            response.json({
                message: 'Connection failed'
            });
        }

        response.json({
            message: 'Connection success',
            data: rows
        })
    })
})

// Membuka Portal 4000 (harus ada)
app.listen(4000, () => {
    console.log('menjalankan server')
});