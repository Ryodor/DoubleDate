/** Model for the Users table */
class IdentificationMdl {
    constructor(con) {
        this.con = con;
    }

    /**
     * Get the active resolvers
     * @return {Promise} The promise who will allow us to get the data
     */

    async getUser(mail, mdp) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT email, mdp from utilisateurs 
                                WHERE email = "${mail}"
                                AND mdp="${mdp}";`, [], (err, results) => {
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
module.exports = IdentificationMdl;