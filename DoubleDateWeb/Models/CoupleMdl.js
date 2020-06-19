/** Model for the Users table */
class CoupleMdl {
    constructor(con) {
        this.con = con;
    }

    /**
     * Get the active resolvers
     * @return {Promise} The promise who will allow us to get the data
     */


    async getInfoCouple(coupleId) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT * FROM couples 
            INNER JOIN couple_infos ON couple_infos.couple_id = couples.couple_id
            WHERE couples.couple_id = ${coupleId};`, [], (err, results) => {
                if (err) throw err;
                if (results === undefined) {
                    reject(new Error("Undefined"));
                } else {
                    resolve(results);
                }
            });
        });
    }

    async getCoupleWithUser(userId) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT * FROM couples
            WHERE couples.utilisateur_id_A = ${userId} OR couples.utilisateur_id_B = ${userId};`, [], (err, results) => {
                if (err) throw err;
                if (results === undefined) {
                    reject(new Error("Undefined"));
                } else {
                    resolve(results);
                }
            });
        });
    }

    async getAllOtherCouples(coupleId) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT * FROM couples 
            INNER JOIN couple_infos ON couple_infos.couple_id = couples.couple_id
            WHERE couples.couple_id != ${coupleId};`, [], (err, results) => {
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
module.exports = CoupleMdl;