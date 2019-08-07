const {Router} = require('express'); // в фигурных скобочках - свойство из express в данном случае
const router = Router(); // функция в объекте

router.get('/1', (req, res) => {
    res.render('article', {
        article: 'статья 1',
        content: 'Ще не вмерла'
    })
});

router.get('/2', (req, res) => {
    res.render('article', {
        article: 'статья 2',
        content: 'Ще не вмерла слава'
    })
});

router.get('/3', (req, res) => {
    res.render('article', {
        article: 'статья 3',
        content: 'Ще не вмерла воля'
    })
});

router.get('/', (req, res) => {
    res.send('<a href="./article/1" target="blank">Home page 1</a> <br> <a href="./article/2" target="blank">Home page 2</a> <br> <a href="./article/3" target="blank">Home page 3</a>')
});

module.exports = router;