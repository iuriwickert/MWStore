// Carrinho de compras
let carrinho = [];

// Função para formatar preço em Real
function formatarPreco(valor) {
    return valor.toFixed(2).replace('.', ',');
}

// Função para renderizar produtos na tela
function renderizarProdutos(listaProdutos = produtos) {
    const grid = document.getElementById('produtosGrid');
    grid.innerHTML = '';

    listaProdutos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'produto-card';
        
        const estoqueClass = produto.estoque === 0 ? 'sem-estoque' : produto.estoque <= 5 ? 'estoque-baixo' : '';
        
        card.innerHTML = `
            <h3>⚡ ${produto.nome}</h3>
            <p class="preco">R$ ${formatarPreco(produto.preco)}</p>
            <p class="estoque ${estoqueClass}">
                📦 ${produto.estoque} ${produto.estoque === 1 ? 'unidade' : 'unidades'}
            </p>
            <button 
                class="btn-adicionar" 
                onclick="adicionarAoCarrinho(${produto.id})"
                ${produto.estoque === 0 ? 'disabled' : ''}
            >
                ${produto.estoque === 0 ? '❌ Indisponível' : '➕ Adicionar'}
            </button>
        `;
        
        grid.appendChild(card);
    });
}

// Função de busca
function buscarProdutos(termo) {
    const termoLower = termo.toLowerCase();
    const resultados = produtos.filter(p => 
        p.nome.toLowerCase().includes(termoLower)
    );
    renderizarProdutos(resultados);
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    
    if (!produto || produto.estoque === 0) {
        alert('Produto indisponível!');
        return;
    }

    const itemCarrinho = carrinho.find(item => item.id === produtoId);
    
    if (itemCarrinho) {
        if (itemCarrinho.quantidade >= produto.estoque) {
            alert('Quantidade máxima atingida para este produto!');
            return;
        }
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            quantidade: 1,
            estoqueDisponivel: produto.estoque
        });
    }
    
    atualizarCarrinho();
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

// Remover produto do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

// Alterar quantidade no carrinho
function alterarQuantidade(produtoId, delta) {
    const item = carrinho.find(i => i.id === produtoId);
    if (!item) return;
    
    const novaQuantidade = item.quantidade + delta;
    
    if (novaQuantidade <= 0) {
        removerDoCarrinho(produtoId);
        return;
    }
    
    if (novaQuantidade > item.estoqueDisponivel) {
        alert('Quantidade máxima atingida!');
        return;
    }
    
    item.quantidade = novaQuantidade;
    atualizarCarrinho();
}

// Atualizar exibição do carrinho
function atualizarCarrinho() {
    const totalItens = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    document.getElementById('totalItens').textContent = totalItens;
    
    renderizarItensCarrinho();
}

// Renderizar itens dentro do carrinho sidebar
function renderizarItensCarrinho() {
    const container = document.getElementById('itensCarrinho');
    
    if (carrinho.length === 0) {
        container.innerHTML = '<p class="carrinho-vazio">🛒 Nenhum item selecionado</p>';
        document.getElementById('valorTotal').textContent = 'R$ 0,00';
        return;
    }
    
    let html = '';
    let total = 0;
    
    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        
        html += `
            <div class="item-carrinho">
                <div class="item-info">
                    <h4>⚡ ${item.nome}</h4>
                    <p class="item-preco">💵 R$ ${formatarPreco(item.preco)} × ${item.quantidade}</p>
                    <p class="item-subtotal">💰 R$ ${formatarPreco(subtotal)}</p>
                </div>
                <div class="item-controles">
                    <button onclick="alterarQuantidade(${item.id}, -1)">−</button>
                    <span>${item.quantidade}</span>
                    <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
                    <button class="btn-remover" onclick="removerDoCarrinho(${item.id})">🗑️</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    document.getElementById('valorTotal').textContent = 'R$ ' + formatarPreco(total);
}

// Mostrar notificação
function mostrarNotificacao(mensagem) {
    const notif = document.createElement('div');
    notif.className = 'notificacao';
    notif.textContent = mensagem;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// Limpar carrinho
document.getElementById('btnLimparCarrinho').onclick = () => {
    if (confirm('Deseja realmente limpar a lista?')) {
        carrinho = [];
        atualizarCarrinho();
        mostrarNotificacao('🗑️ Lista limpa!');
    }
};

// Copiar lista para texto
document.getElementById('btnCopiarLista').onclick = () => {
    if (carrinho.length === 0) {
        alert('❌ Lista vazia!');
        return;
    }
    
    let texto = '📋 LISTA DE CONSULTA - LIQUIDAÇÃO\n';
    texto += '═'.repeat(50) + '\n\n';
    
    carrinho.forEach((item, index) => {
        const subtotal = item.preco * item.quantidade;
        texto += `${index + 1}. ${item.nome}\n`;
        texto += `   💵 Preço: R$ ${formatarPreco(item.preco)}\n`;
        texto += `   📦 Quantidade: ${item.quantidade}\n`;
        texto += `   💰 Subtotal: R$ ${formatarPreco(subtotal)}\n\n`;
    });
    
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    texto += '═'.repeat(50) + '\n';
    texto += `💰 VALOR TOTAL: R$ ${formatarPreco(total)}\n`;
    texto += `📊 Total de itens: ${carrinho.reduce((sum, item) => sum + item.quantidade, 0)}\n`;
    
    // Copiar para clipboard
    navigator.clipboard.writeText(texto).then(() => {
        mostrarNotificacao('✅ Lista copiada para a área de transferência!');
    }).catch(() => {
        // Fallback para navegadores antigos
        const textArea = document.createElement('textarea');
        textArea.value = texto;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            mostrarNotificacao('✅ Lista copiada!');
        } catch (err) {
            alert('Erro ao copiar. Use Ctrl+C manualmente:\n\n' + texto);
        }
        document.body.removeChild(textArea);
    });
};

// Busca de produtos
document.getElementById('searchInput').addEventListener('input', (e) => {
    buscarProdutos(e.target.value);
});

// Exibir data de última atualização
document.getElementById('dataAtualizacao').textContent = dataUltimaAtualizacao;

// Inicializar
renderizarProdutos();
