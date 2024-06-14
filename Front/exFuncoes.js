function saudacao(nome){

    return `Olá, cumprimento o sr ${nome}`; 

}

console.log(saudacao('Marcelo'));


function idade(Idade){
    if (Idade >= 18){
        return 'é maior de idade'
    }else{
        return 'é menor de idade'
    }

}

console.log(idade(18));

console.log(idade(15));


 

function palidromo(palavra){
    
    var palavraInvertida = palavra.split('').reverse().join('')

    if((palavra === palavraInvertida )){
        return true;
    }
    else{
        return false;
    }

}


console.log(palidromo('ana'));

/*

split(''): Divide a string em um array de caracteres.
reverse(): Inverte o array de caracteres.
join(''): Junta os caracteres de volta em uma string.
*/




function maiorNumero(num1,num2,num3){
    
    var numberArray = [num1,num2,num3];

    let maior = numberArray[0];

    for (let i = 1; i < numberArray.length; i++ ){
        if(numberArray[i] > maior){
            maior = numberArray[i];
        }
    }

    return maior;

}

console.log(maiorNumero(1,5,3));














