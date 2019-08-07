const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');
const userRouter = require('./routes/user.js');
const articleRouter = require('./routes/article.js');

app.use('/', indexRouter); // объявляем функцию промежуточной обработки
app.use('/user', userRouter);
app.use('/article', articleRouter);

// app.get('/', (req, res, next) => {  //мы запрашиваем инфу по этой ссылке
//     res.send('<h1>Hello<h1>'); // без кавычек пишем, если переменная
// });

// app.get('/about', (req, res, next) => {  //мы запрашиваем инфу по этой ссылке
//     res.send('<h2>About text<h2>'); // без кавычек пишем, если переменная
// });

// app.get('/main', (req, res, next) => {  //мы запрашиваем инфу по этой ссылке
//     res.send('<h3>Main text<h3>'); // без кавычек пишем, если переменная
// });

app.set('view engine', 'ejs'); //мы ставим шаблонизатор ejs, app.set рекваерит еджс по-умолчанию

app.listen(3000, () => {
    console.log('listening on 3000')
}); //мы слушаем на этом порту
