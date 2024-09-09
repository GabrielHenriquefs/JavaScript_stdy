// pessoa -> 123 -> {. . .}

const pessoa = {nome: 'Pedro'}
console.log(pessoa.nome)

// pessoa -> 456 -> {. . .}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: "Joao", idade:12})
console.log(pessoaConstante)