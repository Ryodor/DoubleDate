/** Model for the Users table */
class ConversationMdl {
    constructor(con) {
        this.con = con;
    }

    /**
     * Get the active resolvers
     * @return {Promise} The promise who will allow us to get the data
     */

    async getAllConversationsOfUser(userId) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT * FROM conversations 
            WHERE conversations.couple_id_A = (SELECT couple_id FROM couples
            WHERE utilisateur_id_A = ${userId} OR utilisateur_id_B = ${userId}
            LIMIT 1) OR conversations.couple_id_B = (SELECT couple_id FROM couples
            WHERE utilisateur_id_A = ${userId} OR utilisateur_id_B = ${userId}
            LIMIT 1);`, [], (err, results) => {
                if (err) throw err;
                if (results === undefined) {
                    reject(new Error("Undefined"));
                } else {
                    resolve(results);
                }
            });
        });
    }

    async getAllMessageFromConversation(convId) {
        return new Promise((resolve, reject) => {
            this.con.db.query(`SELECT * FROM messages 
            INNER JOIN utilisateurs ON utilisateurs.utilisateurs_id = messages.user_id
            INNER JOIN user_infos ON user_infos.utilisateur_id = utilisateurs.utilisateurs_id 
            WHERE messages.conversation_id = ${convId};`, [], (err, results) => {
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
module.exports = ConversationMdl;