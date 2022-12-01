const express = require('express');
const cors = require('cors');
const loginRouter = require('../routes/loginRouter');
const userRouter = require('../routes/userRouter');
const { erro } = require('../middlewares/ErrorMid');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', loginRouter);
app.use('/register', userRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(erro);

module.exports = app;
