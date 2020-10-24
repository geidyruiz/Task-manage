//link to the express package
var express = require('express');
var router = express.Router();

/* GET Task Index view. */
router.get('/', function(req, res, next) {
 res.render('task/index')
})
//express this file as public
module.exports = router;