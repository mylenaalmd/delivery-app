const express = require('express');
const loginRouter = require('../routes/loginRouter');
const { erro } = require('../middlewares/ErrorMid');

const app = express();
app.use(express.json());

app.use('/login', loginRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(erro);

module.exports = app;
