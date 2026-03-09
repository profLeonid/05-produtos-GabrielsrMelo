'use strict'

function adicionarProduto() {
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')

    if (codigo.value === "" || produto.value === "" || quantidade.value === "") return;

    const novaLinha = document.createElement('tr')
    novaLinha.className = 'hover:bg-violet-50 transition-colors'

    // Criamos as colunas com larguras fixas para alinhar com o topo
    novaLinha.appendChild(criarCelula(codigo.value, 'w-1/4'))
    novaLinha.appendChild(criarCelula(produto.value, 'w-1/2'))
    novaLinha.appendChild(criarCelula(quantidade.value, 'w-1/4'))

    lista.appendChild(novaLinha)
    
    // Limpeza
    codigo.value = ''; produto.value = ''; quantidade.value = '';

    function criarCelula(valor, largura) {
        const td = document.createElement('td')
        td.textContent = valor
        // Adicionamos a classe de largura que passamos por parâmetro
        td.className = `px-4 py-2 text-gray-800 border-b border-gray-100 ${largura}`
        return td
    }
}