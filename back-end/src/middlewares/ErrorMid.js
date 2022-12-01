const erro = (err, _req, res, _next) => {
    const { statusCode, message } = err;
    console.log('no errorMid ...>>>>', statusCode, message);
    return res.status(statusCode || 500).json({ message });
};

module.exports = {
    erro,
};