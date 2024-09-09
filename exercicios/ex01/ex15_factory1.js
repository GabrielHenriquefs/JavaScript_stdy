// Factory simples

// function criarPessoa() {
//     return {
//         nome: 'ana',
//         sobrenome: 'silva'
//     }
// }

//

function criarPessoa2(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

let pessoa =  criarPessoa2('joao', 'pedro', 23)

console.log(pessoa)