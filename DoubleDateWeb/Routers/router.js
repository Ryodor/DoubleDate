const router = require('express').Router();

/** Connection à la DB, c'est un peu comme une clé qui permet d'y accéder */
const DBConnection = require("./../dbConnection.js");
const connection = new DBConnection();

/* initialization of the models */
const IdentificationMdl = require("../Models/IdentificationMdl");



/** Les pages sont appelés par un controlleurs qui aura pour but de gérer les différents paramètres de la page avant de l'afficher */
const SplashWelcomeCtrl = require("./../Controllers/SplashWelcomeCtrl");
const IdentificationCtrl = require("./../Controllers/IdentificationCtrl");
const WelcomeUserCtrl = require("./../Controllers/WelcomeUserCtrl");

/** Pages principales */
const ConversationCtrl = require("./../Controllers/ConversationCtrl");
const MyAccountCtrl = require("./../Controllers/MyAccountCtrl");
const ListingCoupleCtrl = require("./../Controllers/ListingCoupleCtrl");
const EventCtrl = require("./../Controllers/EventCtrl");


/** Lorsque qu'on utilise le chemin "host + / ", une instance du controller "HomePage" est créé */
router.get('/', function(req, res) {
    new SplashWelcomeCtrl(req, res, connection);
});

router.get('/Identification', function(req, res) {
    new IdentificationCtrl(req, res, connection);
});

router.get('/WelcomeUser/:userId', function(req, res) {
    new WelcomeUserCtrl(req, res, connection, req.params.userId);
});


/** Call pages principales */

router.get('/Conversation', function(req, res) {
    new ConversationCtrl(req, res, connection, req.params.userId);
});
router.get('/MyAccount', function(req, res) {
    new MyAccountCtrl(req, res, connection, req.params.userId);
});
router.get('/LesCouplesAutourDuMien', function(req, res) {
    new ListingCoupleCtrl(req, res, connection, req.params.userId);
});
router.get('/Evenement', function(req, res) {
    new EventCtrl(req, res, connection, req.params.userId);
});




router.post('/VerifyId/:mail/:mdp', (req, res) => {
    let IdentMdl = new IdentificationMdl(connection);
    IdentMdl.getUser(req.params.mail, req.params.mdp)
        .then(result => {
            //res.send(JSON.stringify(result));
            //JSON.stringify(result)
            if (result[0].email == req.params.mail && result[0].mdp == req.params.mdp) {
                console.log("peche");

                res.render(`/WelcomeUser/${req.params.mail}`);
            } else {
                res.send("youpoop.com")
                    /** génére jeton et redirige sur les conversations du couple ou sur l'identification de son partenaire  */
            }
        }).catch((error) => {
            res.status(500).send('Something broke!');
            // res.send({ code: 'error', error })
        });


});








module.exports = router;