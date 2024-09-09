function produto(nome, preco, desconto = (preco - (preco * 0.15) )){
        return{
            nome: nome,
            preco: preco,
            valortot: desconto
        }
}

prato = produto('prato', 400)
console.log(prato)

