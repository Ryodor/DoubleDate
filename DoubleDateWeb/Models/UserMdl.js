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

    async getInfoUser(userId) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT * FROM utilisateurs
            INNER JOIN user_infos ON user_infos.utilisateur_id =  utilisateurs.utilisateurs_id
            WHERE utilisateurs.utilisateurs_id = '${userId}';`, [], (err, results) => {
                if (err) throw err;
                if (results === undefined) {
                    reject(new Error("Undefined"));
                } else {
                    resolve(results);
                }
            });
        });
    }

    async getInfoPartenaire(userId) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT * FROM utilisateurs
            INNER JOIN user_infos ON user_infos.utilisateur_id =  utilisateurs.utilisateurs_id
            WHERE utilisateurs.utilisateurs_id = '${userId}';`, [], (err, results) => {
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