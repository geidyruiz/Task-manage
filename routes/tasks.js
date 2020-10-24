//link to the express package
var express = require('express');
//instanciestes a new express route to handle http request
var router = express.Router();

/* GET Task Index view. */
router.get('/', function(req, res, next) {
 res.render('tasks/index')
})
//express this file as public
module.exports = router;