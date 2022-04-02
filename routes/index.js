var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
/* Страница lelouch */
router.get('/lelouch', function (req, res, next) {
    res.send("<h1>Страница lelouch</h1>")
});
/* Страница  cc */
router.get('/cc', function (req, res, next) {
    res.send("<h1>Страница C.C.</h1>")
});
/* Страница zero */
router.get('/zero', function (req, res, next) {
    res.send("<h1>Страница zero</h1>")
});
module.exports = router;
