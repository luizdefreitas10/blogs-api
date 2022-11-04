const express = require('express');
const Router = require('./routes');

// ...

const app = express();

app.use(express.json());

app.use('/login', Router.loginRouter);
app.use('/user', Router.userRouter);
app.use('/categories', Router.categoryRouter);
app.use('/post', Router.postRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
