// const fabricantes = ['mercedes', 'audi', 'bmw']



// function imprimir(nome, indice){
//     console.log(`${indice + 1} => ${nome}`)
// }

// fabricantes.forEach(imprimir)


const nomes = ['gabriel', 'julia', 'pedro', 'carlos']

function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}

nomes.forEach(function(a, b){
    console.log(`${a} // ${b}`)
})

