const UserMdl = require("../Models/UserMdl");
const CoupleMdl = require("../Models/CoupleMdl");

class ListingCouple {
    constructor(request, response, con, userId) {
        this.request = request;
        this.response = response;
        this.con = con;
        this.userId = userId;
        this.init();
    }

    async init() {
        let params = {};

        /** ATTENTION : le "1" corespond à l'id du couple , idealement il sera call depuis le js avec le numéro de la conversation qui convient */
        this.CplMdl = new CoupleMdl(this.con);
        await this.CplMdl.getAllOtherCouples(1).then((res) => {
            params = {...params, allCouple: res };
        });
        this.response.render("Html/ListingCouple.ejs", params);
    }
}
module.exports = ListingCouple;