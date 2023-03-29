const express = require('express');
const bodyParser = require('body-parser');
const conn = require('./mysql');

const app = express();
app.locals.pretty = true;
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendfile('public/change.html');
});
app.post('/info', (req,res) => {
    var sql = 'INSERT INTO info (id, name, phone_number, time) VALUES(?, ?, ?, ?)';
    var sql2 = 'SELECT * from info';
    conn.query(sql, [req.body.id, req.body.name, req.body.phone, req.body.time], function(err, rows, fields){
        if(err){
            console.log(err);
        } else {
            console.log('success');
        }
    });
    conn.query(sql2, function(err, rows, fields){
        res.render('info', {data: rows});
    });

});
app.get('/rank' , (req, res) => {
    var sql = 'SELECT id, name, time from info ORDER By time ASC';
    conn.query(sql, function(err, rows, fields){
        res.render('rank', {data: rows});
    });
});
app.listen(8080);

console.log("open 8080");