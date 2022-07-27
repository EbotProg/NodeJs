
// const express = require('express');

// const app = express();

// app.get('/hola', (req, res)=>{
//     res.send('I just changed the content of the express.js app');
// })

// app.listen(7000, ()=>{console.log('server running on port 7000')});




/****************************************
 * Middleware vid 26
 */

// const express = require('express');

// const app = express();

// const myLogger = (req, res, next) =>{
//     console.log('LOGGED');
//     next();
// }

// const requestTime = (req, res, next) =>{
//     req.reqTime = Date.now();
//     next();
// }

// app.use(myLogger);
// app.use(requestTime);

// app.get('/', (req, res)=>{
//     res.send(`current time: ${req.reqTime}`);
// })

// app.listen(8000, ()=>{console.log('server running on port 8000')});


/********************************
 * Serving static files vid 27
 */


// const express = require('express');
// const path = require('path');
//  const localPath = path.resolve(__dirname, 'public');

// const app = express();

// app.use('/public',express.static('static'))


// app.get('/', (req, res)=>{
//     res.send('Hello');
// })

// app.listen(8000);

/********************************
 * Routing with Express vid28
 */

// const express = require('express');

// const app = express();
// const data = {
//     id: 1,
//     name: 'india'
// }
// const PORT = 5000;

// app.get('/', (req, res)=>{
//     res.send('This is my homepage');
// })

// app.get('/about', (req, res)=>{
//     res.send('This is the about page');
// })

// app.get('/account', (req, res)=>{
//     res.send('This is the account page');
// })

// app.get('/info', (req, res)=>{
//     res.json(data);
// })

// app.listen(PORT, ()=>{console.log(`port running on port ${PORT}`)});




/***************************
 * Views vid 29
 */


// const express = require('express');

// const app = express();

// const PORT = 5000;

// app.set('view engine', 'pug');

// app.get('/', (req, res)=>{
//     res.render('index', {
//         title: 'this is a new title',
//         heading: 'this is a new heading',
//         paragraph: 'this is s a new paragraph'
//     });
// }).listen(PORT, ()=>{
//     console.log(`server running at http://localhost:${PORT}`);
// })



/********************************************
 * Core Express vid 30
 * Express Form
 */

// const express = require('express');

// const app = express();

// const PORT = process.env.PORT || 3000;


// app.set('view engine', 'pug');
// //  app.set('views', path.join(__dirname, 'views'));

// app.use(express.urlencoded({
//     extended: true
// }))


// app.get('/', (req, res)=>{
//     res.render('index', {title: 'form handling'});
// }).listen(PORT, ()=>{
//     console.log(`Server running at http://localhost:${PORT}`);
// })


// app.post('/form_submit', (req, res)=>{
//     res.end(`Your username is ${req.body.username} and email is ${req.body.email}`);
// })


/*********************************
 * Session vid 31
 */


// const express = require('express');
// const session = require('express-session');
// const PORT = process.env.PORT || 4000;

// const app = express();

// app.use(session({
//     secret: 'Your secret key',
//     resave: true,
//     saveUninitialized: true
// }))

// app.get('/', (req, res)=>{
//     req.session.name = 'Oma';
//     res.send('Session set');
// })

// app.get('/session', (req, res)=>{
//     let name = req.session.name;
//   res.send(name);
// })

// app.get('/destroy', (req, res)=>{
//     req.session.destroy((err)=>{
//         console.log("Session destroyed");
//     })
//     res.end();
// })


// app.listen(PORT, ()=>{
//     console.log(`Your server is running at http://localhost:${PORT}`);
// })




/*********************************
 * Cookies vid 32
 */

// const express = require('express');
// const cookies = require('cookie-parser');

// const app = express();
// const port = process.env.port || 3000;

// app.use(cookies());

// let users = {
//      name: 'Ebot', 
//      age: 25
// }

// app.get('/', (req, res)=>{
//     res.send('Cookie Tutorial');
// })

// app.get('/setuser', (req, res)=>{
//     res.cookie('userData', users);
//     res.send('Users data added to cookies');
// })

// app.get('/getuser', (req, res)=>{
//     res.send(req.cookies);
// })


// app.get('/logout', (req, res)=>{
//     res.clearCookie('userData');
//     res.send('logged out sucessfully')
// })



// app.listen(port, ()=>{
//     console.log(`Your server is running at http://localhost:${port}`);
// })




/*******************************
 * 
 */