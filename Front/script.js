var readlineSync = require('readline-sync');


var userName = readlineSync.question('May I have your name? ');

console.log('Hi ' + userName + '!');



var readline = require('readline-sync');

var sexo = readline.question('Informe seu sexo: \n [M] masculino \n Feminino [F] \n');

switch(sexo){
    case 'F':
        console.log('sexo feminino');
        break;
    case 'M':
    console.log('Sexo Masculino');
    break;
    default:
        console.log('Sexo alternativo');
}