const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlcon = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'glory2a'
});

mysqlcon.connect((er)=> {  
    if(!er) {
        console.log('Konek cuk');
    }
    else {
        console.log('Tidak konek cuk : ' + JSON.stringify(er,undefined,2));
    }
});

app.listen(3000,()=>console.log('Server running port 3000'));
app.get('/emp',(res, req)=> {
    mysqlcon.query("select * from absen",(err,rows,field)=>{
        if(!err) {
            console.log(rows[0].kodeaid)
        } else {
            console.log(err);
        }
    });
});