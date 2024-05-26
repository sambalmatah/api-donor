const logRequest = (request, response, next) => {
    console.log('Telah terjadi request ke PATH', request.path);
    next();
}

module.exports = logRequest