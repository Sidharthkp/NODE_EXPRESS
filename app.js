const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session')


const loginRouter = require('./routes/login');
const indexRouter = require('./routes/index');
// const { session } = require('inspector');


const app = express();


app.use( (req,res,next) =>{
  res.header('Cache-Control','private ,no-cache, no-store, must-revalidate')
  next()
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
console.log(logger)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'mmp', resave: true, saveUninitialized: true, cookie:{ maxAge: 60000} }))

app.use('/', loginRouter);
app.use('/home', indexRouter);

// catch 404 and forward to error handler
// page not found(404)
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // server side problem(500)server not found
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;