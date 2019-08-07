const {Router} = require('express'); // в фигурных скобочках - свойство из express в данном случае
const router = Router(); // функция в объекте

router.get('/', (req, res) => {
    res.send('Home page')
});

module.exports = router;