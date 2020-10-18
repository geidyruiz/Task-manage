//link to the express package
var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Geidy\'s family has 4 members' });
});

/* GET Gelvis page. */
router.get('/gelvis', (req, res, next) => {
    res.render('gelvis', { message1: 'Gelvis is a retired military man. His great passion is music and he was able to play different musical instruments. He also likes gardening and photography. His favorite food is fish and his favorite sport is soccer.' });
});

/* GET Gloria page. */
router.get('/gloria', (req, res, next) => {
    res.render('gloria', { message2: 'Gloria was born in Manizales, her favorite activities are painting, gardening and taking long walks' });
});

/* GET Geidy page. */
router.get('/geidy', (req, res, next) => {
    res.render('geidy', { message3: 'Geidy studies computer programming. Her favorite activities are listening to music, dancing, and walking.' });
});
/* GET Ximena page. */
router.get('/ximena', (req, res, next) => {
    res.render('ximena', { message4: 'Ximena is a professional in international business, she is very creative, she designs her clothes and loves to draw and paint. she is a specialist in nail decoration.' });
});
//express this file as public
module.exports = router;
