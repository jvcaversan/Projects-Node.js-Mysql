const express = require('express');
// const error = require('./middlewares/error');
const loginRoutes = require('./routes/routers.login');
// ... start

const app = express();

app.use(express.json());
app.use('/login', loginRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
