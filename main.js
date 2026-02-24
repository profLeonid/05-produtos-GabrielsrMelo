'use strict'

function adicionarProduto(){
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto') 
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')

    const span = document.createElement('span')
    span.textContent = codigo.value
    span.textContent += produto.value
    span.textContent += quantidade.value
    span.className = 'flex flex-col bg-yellow-100 px-8 py-2'

    lista.appendChild(span)
} 