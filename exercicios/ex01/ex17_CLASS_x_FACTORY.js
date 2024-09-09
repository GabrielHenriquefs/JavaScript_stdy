// class Pessoa{
//     constructor(nome){
//         this.nome = nome
//     }
//     falar(){
//         console.log(`Meu nome é ${this.nome}`)
//     }
// }

function Pessoa(nome){
     this.nome = nome
    
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}



const p1 = new Pessoa('pablo')
p1.falar()

const CriarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = CriarPessoa('joao')
p2.falar()