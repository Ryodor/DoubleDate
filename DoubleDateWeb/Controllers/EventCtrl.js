class Event {
    constructor(request, response, con) {
        this.request = request;
        this.response = response;
        this.con = con;
        this.init();
    }

    async init() {
        let params = {};

        this.response.render("Html/Event.html", params);
    }
}
module.exports = Event;