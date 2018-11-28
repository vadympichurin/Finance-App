const express = require('express');
const bodyParser = require('body-parser');
const routerUsers = require('./routes/user');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://qwert:12345qwert@ds031608.mlab.com:31608/test_base');
const PORT = process.env.PORT || 3001;

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {

    res.header('Access-Control-Allow-Origin', '*') //разрешает доступ с любых клиентов к нашему серверу,'*'---все клиенты,
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization') //указываем какие хэдеры разрешенно поддержать -"стандартные headers node.js"

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PATCH, PUT');
        return res.status(200).json({
            Message: 'It\'s okey',
        })
    }

    next();
});
//
// // app.use(express.static(path.join(__dirname,'../build')));
//
app.use('/api/', routerUsers);
//
app.get('/', (req,res) => res.send("Hello!") );
//
// app.get('/', function (req, res, next) {
//     res.sendFile(path.join(__dirname,'../build/index.html'));
// })
//
app.use((req, res, next) => {
  res
    .status(404)
    .json({err: '404'});
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res
    .status(500)
    .json({err: '500'});
});

app.listen(PORT, function () {
  console.log('Server running. Use our API');
});