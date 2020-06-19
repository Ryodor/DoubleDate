const ConversationMdl = require("../Models/ConversationMdl");
const UserMdl = require("../Models/UserMdl");
const CoupleMdl = require("../Models/CoupleMdl");

class Conversation {
    constructor(request, response, con, userId) {
        this.request = request;
        this.response = response;
        this.con = con;
        this.userId = userId;
        this.init();
    }

    async init() {
        let params = {};

        this.CvstMdl = new ConversationMdl(this.con);
        await this.CvstMdl.getAllConversationsOfUser(this.userId).then((res) => {
            params = {...params, conv: res };
        });

        /** ATTENTION : le "1" corespond à l'id de la conversation appelé, idealement il sera call depuis le js avec le numéro de la conversation qui convient */
        await this.CvstMdl.getAllMessageFromConversation(1).then((res) => {
            params = {...params, mess: res };
        });

        this.UMdl = new UserMdl(this.con);
        await this.UMdl.getInfoUser(this.userId).then((res) => {
            params = {...params, userInfo: res };
        });

        /** ATTENTION : le "1" corespond à l'id du couple , idealement il sera call depuis le js avec le numéro de la conversation qui convient */
        this.CplMdl = new CoupleMdl(this.con);
        await this.CplMdl.getInfoCouple(1).then((res) => {
            params = {...params, couple: res };
        });

        this.response.render("Html/Conversation.ejs", params);
    }
}
module.exports = Conversation;