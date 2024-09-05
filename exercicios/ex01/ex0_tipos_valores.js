function inverterValor(valor) {
    if (typeof valor === 'boolean') {
        return !valor  // Inverte o valor booleano
    } else if (typeof valor === 'number') {
        return -valor  // Inverte o sinal do número
    } else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

// Testes
console.log(inverterValor(false))  // Saída: true
console.log(inverterValor(1))      // Saída: -1
console.log(inverterValor("texto"))  // Saída: "booleano ou número esperados, mas o parâmetro é do tipo string"
