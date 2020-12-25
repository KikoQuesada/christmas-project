const express = require('express');
const path = require('path');


const app = express();


//Views--------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


//Routes-------------
const router = require('./configs/router.config');
app.use('/', router);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`App listen at port ${port}`);
});