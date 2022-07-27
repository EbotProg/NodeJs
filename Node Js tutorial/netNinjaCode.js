// reading files

// const fs = require('fs');

// fs.readFile('./myDoc/ebot.txt', (err, data)=>{
//     let myData = data.toString();
// if(err){
//     console.log(err);
// }
// console.log(myData);
// })



// writing files
// const fs = require('fs');

// fs.writeFile('./myDoc/ebot.txt', 'Hello world', ()=>{
//     console.log('file was written');
// })


// appending files

const fs = require('fs');

fs.appendFile('./myDoc/ebot.txt', 'this is an addition....', ()=>{
    console.log('new text has been added');
})
