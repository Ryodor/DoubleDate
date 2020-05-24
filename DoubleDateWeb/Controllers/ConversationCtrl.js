class Conversation {
    constructor(request, response, con) {
        this.request = request;
        this.response = response;
        this.con = con;
        this.init();
    }

    async init() {
        let params = {};

        this.response.render("Html/Conversation.html", params);
    }
}
module.exports = Conversation;