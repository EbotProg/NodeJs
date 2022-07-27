// const a = 5;
// const b = 10;

const { DynamicEntryPlugin } = require("webpack");

// console.log(a*b);

/****************************************
 * Module 
 */
// vid05

// const os = require("os");

// console.log(os.type());
// console.log(os.platform());

// const car = {
//     brand: "BMW",
//     model: "Z4"
// }

// exports.car = car;



/****************************
 * NPM(Node Package Manager)
 */
// console.log("NPM Scripts");



/**********************************************************
 * Event Loop video 10
 */

// const bar = () => console.log("bar");

// const baz = () => console.log("baz");

// const foo = () => {
//     console.log("foo");
//     setTimeout(bar, 1000);
//     baz();
// }

// foo();



/***************************
 * Callbacks
 */


// const getMessage = (msg, callback) =>{

//     setTimeout(()=>{
//         console.log(msg);
//         callback();
//     }, 1000)
// }

// const displayMessage = () =>{
//     console.log("Display Message");
// }

// getMessage("Get Message", displayMessage);






/********************
 * Promises video 12
 */
// const num = 5;

// let promise = new Promise((reject, resolve)=>{
//     setTimeout(()=>resolve(num), 1000);
// })

// promise.then(
//     error => console.log("error"),
//     result =>{
//         console.log("no error");
//         printAfter();
//     }
// )

// const printAfter = () =>{
//     console.log("print After");
// }





/*******************************
 * Async and Await video 13
 */


// function Clown(){
//     return new Promise(resolve =>{
//         setTimeout(()=>{
//             resolve("hi")
//         }, 2000)
//     })
// }

// async function msg(callback){
//     const msg = await Clown();
//     console.log("message: ", msg);
//     callback();
// }

// msg(getResult);

// function getResult() {
//     console.log("Execute After");
// }




/**********************************
 * HTTP Server
 */


// const http = require("http");

// const hostname = "127.0.0.1";

// const port = 3000;

// http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write("Welcome to HTTP server");
//     res.end();
// }).listen(port, hostname, () =>{
//     console.log(`Server running at http://${hostname}:${port}/`);
// })




/******************************************
 * Making HTTP Requests vid15
 */

// const http = require('http');

// http.get('http://api.open-notify.org/astros.json', resp =>{
//     let data = '';
//     resp.on('data', chunk =>{
//         data += chunk;
//     });

//     resp.on('data', ()=>{
//         let jsondata = JSON.parse(data);
//         console.log(jsondata);
//     })
    
// })
  


/****************************
 * HTTP POST Request
 */


// const axios = require('axios');

// const data = JSON.stringify({
//     name: "John Doe",
//     Job: "Content Writer"
// });


// const options = {
//     hostname: 'reqres.in',
//     path: "/api/users",
//     method: 'POST',
//     header: {
//         'Content-Type': 'application/json'
//     }
// }


//request
// const req = http.request(options, (res)=>{

//     let body = '';
//     console.log("Status Code: ", res.statusCode);
//     res.on('data', (chunk)=>{
//         body += chunk;
//     });

//     res.on('end', ()=>{
//         console.log("Body: ", JSON.parse(body));
//     })
// })

// req.write(data);
// req.end();



// axios.post('https://reqres.in/api/users', data).then(res=>{
//     console.log(`Status Code: ${res.status}`);
//     console.log(`Body: ${JSON.stringify(res.data)}`);
// }).catch(err=>{
//     console.log(err);
// })





/********************************************
 * Deeper understanding of nodejs with net ninja tutorial
 */


// Clients and Servers

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) =>{
// res.setHeader('Content-Type', 'text/html');

// //set header content type
// let path = './myDoc/';
// switch(req.url){
//     case '/':
//         path += 'home.html';
//         res.statusCode = 200;
//         break;
//     case '/about':
//         path += 'about.html';
//         res.statusCode = 200;
//         break;
//     case '/about-me':
//         res.statusCode = 301;
//         res.setHeader('Location', '/about');
//         res.end();
//         break;
//     default:
//         path += 'page404.html';
//         res.statusCode = 404;
//         break;
// }

// fs.readFile(path, (err, data)=>{
//     if(err) console.log(err);
//     res.write(data);
//     res.end();
// })



// });



// server.listen(3000, 'localhost', ()=>{
//     console.log('listening for requests on port 3000');
// })




/**************************
 * HTTP Post Request
 */

// const axios = require('axios');

// const data = JSON.stringify({
//     school: 'UB',
//     faculty: 'fet'
// });


// axios.post('https://reqres.in/api/users', data).then(res =>{
//     console.log(`Status code: ${res.status}`);
//     console.log(`Body: ${JSON.stringify(res.data)}`);
// }).catch(err=>{
//     console.log(err);
// })




/******************************************
 * Working with files vid 17
 */

// const fs = require('fs');

// // Asynchronous
// fs.readFile('./myDoc/ebot.txt', 'utf8', (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// // Synchronous
// const data = fs.readFileSync('./myDoc/ebot.txt', {encoding: 'utf8', flag:'r'});
// console.log(data);


// fs.stat('./myDoc/ebot.txt', (err, stats)=>{
//     if(err){
//         console.error(err);
//         return
//     }
// console.log(stats.size);

// })




/******************************
 * Writing and Updating files vid 18
 */

// flag values
// 1. a+ : opens file for reading and writing and positions new text at the end of file
// 2. a : opens file for writing, positioning the string at the end of the file
// 3. r+ : opens file for reading and writing 
// 4. w+ : opens file for reading and writing positioning string at the beginning of file


// const fs = require('fs');

// fs.writeFileSync('./myDoc/ebot.txt', 'Hello, this is an update', {flag: 'a+'} );

// const content = {
//     type: 'Node Applicaton'
// }
// synchronous method
// fs.writeFileSync('test.json', JSON.stringify(content), {flag: 'a'});

// asynchronous method
// const content = "Node+";

// fs.writeFile('test.txt', content, {flag: 'w+'}, err=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Sucessfully Done');
// })

// fs.unlink('test.txt', err =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('file removed');
// })



/******************************************
 * Routing vid 19
 * Executing tasks on a particular path is called routing
 */

// const http = require('http');
// const fs = require('fs');



// http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');


//     let path = './myDoc/';
//      switch(req.url){
//         case '/': 
//            path += 'home.html';
//            break;
//         case '/about':
//             path += 'about.html';
//             break;
//         default:
//             path += 'page404.html';
//             break;
//      }
//      fs.readFile(path, (err, data)=>{
//         if(err) console.log(err);
//         res.write(data);
//         res.end();
    
        
//      })
    
     
// }).listen(8000);

//using object oriented programming

// const routes = {
//     '/': function index(req, res){
//         fs.readFile('./myDoc/home.html', (err, data)=>{
//             if(err) console.log(err);
//             res.write(data);
//             res.end();
//         })
//         },
//     '/about': function about(req, res){
//         fs.readFile('./myDoc/about.html', (err, data)=>{
//             if(err) console.log(err);
//             res.write(data);
//             res.end();
//         })
//         },
//     '/other': function notFound(req, res){
//         fs.readFile('./myDoc/page404.html', (err, data)=>{
//             if(err) console.log(err);
//             res.write(data);
//             res.end();
//         })
//     }
// }
 



// http.createServer((req, res)=>{
//     res.setHeader('Content-Type', 'text/html');

//     if(req.url in routes){
//         routes[req.url](req, res);
//     }
//     else{
//         routes['/other'](res, res);
//     }

   
// }).listen(8000);




/******************************************
 * Path Module vid 20
 */


// const path = require('path');



// let dir = 'Node Js tutorial';
// file = path.resolve('Node Js tutorial/test.json');
// console.log(file);



/*********************************************
 * Event Module vid 21
 */

// const events = require('events');

// let ev = new events.EventEmitter();

// ev.on('my_event', (data)=>{
//     console.log("Event:", data);
// });

// let c1 = (code, msg)=>{
//     console.log(`Got ${code} and ${msg}`);
// }
// ev.once('once_event', c1);
// ev.off('once_event', c1);
// ev.emit('once_event', 200, 'ok');



/********************************
 * Streams vid 22
 */

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res)=>{
//      res.setHeader('Content-Type', 'text/plain'); 

//    const stream = fs.createReadStream('test.json');
//    stream.pipe(res);
// }).listen(8000, ()=>{
//     console.log('server running at port 8000');
// });



/*********************************************************
 * Buffer vid 23
 */


// let buf = Buffer.alloc(7);
// buf.write('Helloha');            
// console.log(buf.toString());

// console.log(buf[0]);
// console.log(buf[1]);
// console.log(buf[2]);
// console.log(buf[3]);
// buf[1] = 111;
// console.log(buf.toString());

/*****************************
 * Exception handling  vid 24
 */

// using the throw keyword
// throw new Error('this is an error message');

// using the try and catch method

// try{
//    console.log('No error has occured yet');
//    lalalal;
// } catch(err){
//    console.log(err);
// }

/****Using promises */
// doSomething1()
// .then(()=>{
//     return doSomething2().catch(err=>{
//         throw err;
//     })
// })
// .then(()=>{
//     return doSomething2().catch(err=>{
//         throw err;
//     })
// })
// .catch(err =>{ console.log(err)});

/**********using async and await */


// async function someFunction(){
//     try{
//         await someOtherFunction();
//     } catch (err){
//         console.error(err.message);
//     }
// }



