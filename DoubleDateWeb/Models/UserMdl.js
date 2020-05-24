/** Model for the Users table */
class UserMdl {
    constructor(con) {
        this.con = con;
    }

    /**
     * Get the active resolvers
     * @return {Promise} The promise who will allow us to get the data
     */

    async getAccountData(mail) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT * from utilisateurs 
                                WHERE utilisateurs.email = '${mail}';`, [], (err, results) => {
                if (err) throw err;
                if (results === undefined) {
                    reject(new Error("Undefined"));
                } else {
                    resolve(results);
                }
            });
        });
    }
}
module.exports = UserMdl;