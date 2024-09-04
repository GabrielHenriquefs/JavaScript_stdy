let maiorOUigual = function(valor1, valor2){
    if(typeof valor1 != typeof valor2){
        return `TIPOS DIFERENTES, TENTE COM INTEIROS`
    }
    if(valor1 < valor2){
        return `Valor 1 é menor que o valor 2`
    }else if(valor1 > valor2){
        return `Valor 1 é maior que o valor 2`
    }else if(valor1 === valor2){
        return `Os valores são iguais`
    }else{
        return `ERRO`
    }
}

console.log(maiorOUigual(2, 5))
console.log(maiorOUigual(22, 5))
console.log(maiorOUigual(2, 2))
console.log(maiorOUigual(2, "5"))