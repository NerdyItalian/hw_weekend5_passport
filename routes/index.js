var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

/* GET home page. */
router.get("/", function(req,res,next){
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

//Passport.authenticate is specifying our ‘local’ strategy that we created
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/'
    })
);

module.exports = router;
