const UserMdl = require("../Models/UserMdl");

class WelcomeUser {
    constructor(request, response, con, mail) {
        this.request = request;
        this.response = response;
        this.con = con;
        this.mail = mail;
        this.init();
    }

    async init() {
        let params = {};


        this.n = new UserMdl(this.con);
        await this.n.getAccountData(this.mail).then((res) => {
            params = {...params, item: res };
        });
        this.response.render("Html/WelcomeUser.ejs", params);
    }
}
module.exports = WelcomeUser;