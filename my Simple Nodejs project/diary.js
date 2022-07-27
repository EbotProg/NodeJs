const readline = require('readline-sync');
const fs = require('fs');
const userPassword = '1234';

const getPassword = () =>{
    console.log('1st funct');
    let password = String(readline.question("Password: "));
    return password;
}




const validation = (password, usrpsswd, callback1, callback2) =>{
    console.log('2nd function');
    password();
    
    if(password === usrpsswd){
        console.log('password is correct');
        callback1();
        callback2();
    }else{console.log('incorrect');}
}




const showDiaryText = () =>{
    console.log('3rd function');
    fs.readFile('./myDoc/diary.txt', (err, data)=>{
        if(err) console.log(err);
        else console.log(data);
    })
}


const updateDiary = () =>{
    console.log('4th function');
    let newDiaryText = String(readline.question('Add some text to your diary: '));
fs.writeFile('./myDoc/diary.txt', newDiaryText, ()=>{
    console.log('Diary updated');
} );
}



validation(getPassword, userPassword, showDiaryText, updateDiary);
