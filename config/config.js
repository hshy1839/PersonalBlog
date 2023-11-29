require("dotenv").config();
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: '7777',
    user: 'hshy1839',
    password: 'wghdtjrgud3!',
    database: 'personal_blog'
})
conn.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('mysql connecting...')
    }
})
module.exports = conn