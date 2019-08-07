const {Router} = require('express'); // в фигурных скобочках - свойство из express в данном случае
const router = Router(); // функция в объекте

router.get('/', (req, res) => {
    res.send('User page')
});

router.get('/123', (req, res) => {
    res.send('Страница 123')
});

router.get('/123/567', (req, res) => {
    res.send('Страница 567')
});

module.exports = router;