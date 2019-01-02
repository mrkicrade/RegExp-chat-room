let polje1 = document.querySelector('#polje1');
let btn1 = document.querySelector('#btn1');
let area = document.querySelector('#area');
let polje2 = document.querySelector('#polje2');
let btn2 = document.querySelector('#btn2');

btn1.addEventListener('click' , move1);
btn2.addEventListener('click' , move2);


// let badWords = new RegExp(polje[i],  'gi')
let ekran = ['shit' , 'ass' , 'dick' , 'fuck'];

function move1(){
    let msg = polje1.value;
    for (let i = 0; i < ekran.length; i++) {
        let bd = new RegExp(ekran[i], 'gi')
        cleanPolje1 = msg.replace(bd , '*****');
        msg = cleanPolje1;
    }
    area.value += 'Player1: ' + cleanPolje1 + '\n'
    polje1.value = "";   
}

function move2(){
    let msg = polje2.value;
    for (let i = 0; i < ekran.length; i++) {
        let bd = new RegExp(ekran[i], 'gi')
        cleanPolje2 = msg.replace(bd, '*****');
        msg = cleanPolje2;
    }
    area.value += 'Player2: ' + cleanPolje2 + '\n'
    polje2.value = "";
}