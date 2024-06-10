const jwt = require('jsonwebtoken');

const verifyProfile = (request, response, next) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return response.status(401).send('access Denied: No Token Provided!');
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        request.user = verified;
        response.json({
            message: 'This is a protected route',
            user: request.user
        });
        next();
    } catch (error) {
        response.status(400).send('Invalid Token');
    }
}

module.exports = {
    verifyProfile,
}