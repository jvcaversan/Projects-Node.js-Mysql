require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');
// const { generateToken } = require('../utils/jwt');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
};

const startLogin = async ({ email, password }) => {
  if (!email || !password) {
    const error = new Error('Some required fields are missing');
    error.status = 400;
    throw error;
  }

  const user = await User.findOne({
    attributes: ['id', 'email'],
    where: { email, password },
  });

  if (!user) {
    const error = new Error('Invalid fields');
    error.status = 400;
    throw error;
  }
const { id } = user.dataValues;

  // const token = generateToken({ id, email });
  
  const token = jwt.sign({ id, email }, TOKEN_SECRET, jwtConfig);
  // console.log(token);
  return { token };
};

module.exports = {
    startLogin,
};