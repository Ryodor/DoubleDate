class Identification {
    constructor(request, response, con) {
        this.request = request;
        this.response = response;
        this.con = con;
        this.init();
    }

    async init() {
        let params = {};

        this.response.render("Html/Identification.html", params);
    }
}
module.exports = Identification;