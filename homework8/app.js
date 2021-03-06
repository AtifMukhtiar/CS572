var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

const DBConnection = require('./db/DBConnection');
const dbConnection = new DBConnection();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let queryRouter = require('./routes/Queries');

var app = express();
const helmet = require('helmet');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet.hsts({
    directives: {}
}));

app.use(helmet.hpkp({
    maxAge: 7776000,
    sha256s: ['AbCdEf123=', 'ZyXwVu456=']
}));

app.use('/', dbConnectionHandler, indexRouter);
app.use('/users', usersRouter);
app.use('/queries', queryRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

function dbConnectionHandler(req, res, next) {
    req.dbCollection = dbConnection.getCollection();
    return next();
}

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(4000, () => {
    console.log("Listening on 4000")
});
module.exports = app;
