const soma = function(x, y){
    return x + y
}

const diminuir = function(x, y){
    return x - y
}

const multiplicar = function(x, y){
    return x * y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}

const pessoa ={
    falar(){
        console.log('opa')
    }
}

imprimirResultado(2, 5)
imprimirResultado(21, 10, diminuir)
imprimirResultado(5, 5, multiplicar)
imprimirResultado(30, 4, (x, y) => x / y)
pessoa.falar()
