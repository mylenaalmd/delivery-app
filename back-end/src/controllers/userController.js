const { userService } = require('../services');

const createUser = async (req, res, next) => {
    try {
        const result = await userService.createUser(req.body);
       return res.status(201).json({ result });
    } catch (error) {
       next(error);
    }
};

const getSellers = async (_req, res, next) => {
    try {
        const sellers = await userService.getSellers();
        return res.status(200).json(sellers);
    } catch (error) {
        next(error);
    }
};
    
module.exports = {
    createUser,
    getSellers,
};