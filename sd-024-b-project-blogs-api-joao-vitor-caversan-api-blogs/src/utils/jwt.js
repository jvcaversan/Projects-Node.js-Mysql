require('dotenv').config();

const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    console.log(payload);
    jwt.sign(payload, TOKEN_SECRET, jwtConfig);
};

const authenticateToken = async (token) => {
    if (!token) {
        const error = new Error('missing auth token');
        error.status(404);
        throw error; 
    }

    try {
        const decryptedData = await jwt.verify(token, TOKEN_SECRET);
        return decryptedData;
    } catch (err) {
    const error = new Error('jwt malformed');
    error.status = 401;
    throw error;
}
};

module.exports = {
    generateToken,
    authenticateToken,
};