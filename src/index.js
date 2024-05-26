// PANGGIL SOURCE

const express = require('express');


// Membuat variable fungsi express

const app = express();

// EKSEKUSI API

app.listen(4000, () => {
    console.log('server berhasil di running');
});

app.get('/', (request, response) => {
    response.send('Helo from get');
});

app.post('/', (request, response) => {
    response.send('Helo from post')
});