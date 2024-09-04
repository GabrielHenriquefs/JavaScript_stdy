function idd(idade){
    let valor = Number(idade)
    let dias = valor * 365
    return (`Voce tem ${idade} e ${Math.floor(dias)} dias de vida`)
}

const pessoa = idd(23)

console.log(pessoa)

