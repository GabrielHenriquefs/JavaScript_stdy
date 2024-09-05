function retorno(elemento, vezes){
    const resultado = []
    for(i = 0; i < vezes; i++){
        resultado.push(elemento)
    }
    return resultado
}


console.log(retorno('oi', 3))
console.log(retorno(6, 3))
console.log(retorno(3, 3))
console.log(retorno('oi', 1))