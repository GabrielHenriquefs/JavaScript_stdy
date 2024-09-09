// Coleção dinamica de pares chave/vlaor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generico'
produto.preco = 220

console.log(produto)

delete produto.preco
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 43
    }],
    calcularValorSeguro: function(){
        // ...
    }
}


console.log(carro.condutores.length)