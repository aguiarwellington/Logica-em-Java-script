
//Descobrir qual é o maior numero entre os 3 


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