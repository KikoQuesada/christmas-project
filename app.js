const express = require('express');
const path = require('path');


const app = express();


//Views--------------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
require('./configs/hbs.config');

//Configure body parser
app.use(express.urlencoded({ extended: true}));


//Router-------------
const router = require('./configs/router.config');
app.use('/', router);

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`App listen at port ${port}`);
});