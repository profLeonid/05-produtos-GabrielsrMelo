'use strict'

function adicionarProduto() {
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')

    // Chamamos a função para cada input separadamente
    criarCaixa(codigo.value)
    criarCaixa(produto.value)
    criarCaixa(quantidade.value)
    
    ;
    
    // Limpa os campos após adicionar para facilitar o uso
    codigo.value = ''
    produto.value = ''
    quantidade.value = ''

    // Criamos uma função interna para não repetir o mesmo código 3 vezes
    function criarCaixa(valor) {
        if (valor ==="") return; // Ignora se o campo estiver vazio
        const novoSpan = document.createElement('span')
        novoSpan.textContent = valor
        // Suas classes do Tailwind para o visual amarelo
        novoSpan.className = 'bg-yellow-100 px-8 py-2 border border-yellow-200 rounded shadow-sm'
        lista.appendChild(novoSpan)
    }


}