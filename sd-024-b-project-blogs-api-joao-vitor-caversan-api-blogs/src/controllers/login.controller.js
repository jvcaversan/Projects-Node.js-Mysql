const loginService = require('../services/login.service');

    const startLogin = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const newLogin = await loginService.startLogin({ email, password });
        // console.log(newLogin);
        return res.status(200).json(newLogin);
    } catch (err) {
        return res.status(err.status).json({ message: err.message });
    }
};

module.exports = {
    startLogin,
};