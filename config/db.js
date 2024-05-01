/* mysql npm
   npm i mysql
   players{id, name, club}
*/

const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "node"
});

module.exports = conn;