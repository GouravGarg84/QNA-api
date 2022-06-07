const express = require('express')
const app = express() ;
const mysql = require('mysql2');


const bodyparser = require('body-parser');
app.use(bodyparser.json());

const res = require('express/lib/response');

const question =require('./routes/ques');
const  answer=require('./routes/ans')
const signup=require('./routes/signup')

const signin=require('./routes/signin')

app.use('/signin',signin)
app.use('/signup',signup)

app.use('/ques',question)
app.use('/ans',answer)



var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sqltutorial',
    database: 'qnaweb',
    
  
});



mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connected.');
    else
        console.log('DB  not connected \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.get('/question', (req, res) => {
    mysqlConnection.query('SELECT * FROM ques', (err, rows, fields) => {
        if (!err)
            res.send(rows);
            
        else
            console.log(err);
    })
});

app.get('/answer', (req, res) => {
    mysqlConnection.query('SELECT * FROM ans', (err, rows, fields) => {
        if (!err)
            res.send(rows);
            
        else
            console.log(err);
    })
});

app.get('/signupdata', (req, res) => {
    mysqlConnection.query('SELECT * FROM signupdata', (err, rows, fields) => {
        if (!err)
            res.send(rows);
            
        else
            console.log(err);
    })
});

app.listen(1234, () => console.log('server is running at port 1234.....'));
