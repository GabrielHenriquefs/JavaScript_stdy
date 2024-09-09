// notação literal

const obj1 = {
    nome: 'pedro'
}

// object em JS
const obj2 = new Object
console.log(obj2)

// funções construtoras

function produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComdesconto = () =>{
        return preco * (1 - desc)
    }
    
    
}

const c1 = new produto('caneta', 12.22, 0.15)
console.log(c1.nome, c1.getPrecoComdesconto())

// funcao factory

function criarFuncionario(nome, salario, faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30 * (30 - faltas))
        }
    }
}

const p1 = new criarFuncionario('Gabriel', 7980, 4)
console.log(p1.getSalario())

// Objet.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha.nome)

// funcao famosa que retornar objeto . . . 

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)