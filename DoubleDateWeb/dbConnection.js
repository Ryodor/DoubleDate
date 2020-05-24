/* mysql's Lib and Driver */
const mysql = require("mysql");

class DBConnection {
    constructor(host, user, pass, dbName, port) {
        this.db = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "double_date"
        });

        this.connect();
    }

    connect() {
        this.db.connect(err => {
            if (err) {
                throw err;
            }
            console.log("Mysql Connected...");
        });
    }
}

module.exports = DBConnection;