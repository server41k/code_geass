var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index.ejs', { title: 'Express' });
});
/* Страница lelouch */
router.get('/lelouch', function (req, res, next) {
    res.render('hero.ejs', {
        title: "Страница lelouch",
        picture: "images/lelouch.jpg",
        desc: "ГГ Код Гиас"
    });
});
/* Страница  cc */
router.get('/cc', function (req, res, next) {
    res.render('hero.ejs', {
        title: "Страница C.C.",
        picture: "images/cc.jpg",
        desc: "ГГ-ня Код Гиас"
    });
});
/* Страница zero */
router.get('/zero', function (req, res, next) {
    res.render('hero.ejs', {
        title: "Страница zero",
        picture: "images/zero.jpg",
        desc: "[ДАННЫЕ УДАЛЕНЫ]"
    });
});

module.exports = router;
