//parametros/argumentos
//retorno

function exiberNomeEstudante(nome){
 
    console.log(nome);   
}

exiberNomeEstudante('Caroline');

function dadosAluno(nome,nota){
    console.log(`O nome do aluno é ${nome} e sua nota é ${nota}`);
    return nome

}

dadosAluno('caroline', 8);


function somadados(nota1,nota2){

    const total = nota1 + nota2;
    
    return `O total dos valores da ${nota1} e ${nota2} é:  ${total}`;

  
}

console.log(somadados(5,6));
console.log(somadados(5,6));


//expressao de funcao
//tornar a uma variavel recebendo um funcao 


const estudanteReprovou = function(notafinal, Faltass){

    if (notafinal < 7 && Faltass > 4){
        return true;
    }else{
        return false
    }

}

console.log(estudanteReprovou(6,5));



//arrow - function

const estudanteReprovou1 = (notafinal, Faltass) => {

    if (notafinal < 7 && Faltass > 4){
        return true;
    }else{
        return false
    }
}

console.log(estudanteReprovou(6,5));


const exibenome = (nome) => nome;



