document.addEventListener('DOMContentLoaded', function() {
    const packs = [
        {
            id: 1,
            nome: "🔥 Pack da safadinha 🔥",
            produtos: [
                { 
                    id: 1, 
                    nome: "2 fotos + 1 vídeo", 
                    preco: "R$ 6.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 2, 
                    nome: "4 fotos + 2 vídeos", 
                    preco: "R$ 8.50", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 3, 
                    nome: "5 fotos + 3 vídeos", 
                    preco: "R$ 10.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 4, 
                    nome: "6 fotos + 4 vídeos", 
                    preco: "R$ 14.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 5, 
                    nome: "12 fotos + 6 vídeos", 
                    preco: "R$ 40.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                }
            ]
        },
        {
            id: 2,
            nome: "🔥😈 Vídeos Exclusivos 😈🔥",
            produtos: [
                { 
                    id: 6, 
                    nome: "Boquete 🤤", 
                    preco: "R$ 20.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 7, 
                    nome: "Masturbando até gozar 💦", 
                    preco: "R$ 25.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 8, 
                    nome: "Pacote com 10 vídeos", 
                    preco: "R$ 35.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 9, 
                    nome: "Conteúdo Premium 🔞😈", 
                    preco: "", 
                    checkoutLink: "" // Sem link de checkout
                }
            ]
        }
    ];

    const produtosAvulsos = [
        { 
            id: 10, 
            nome: "Áudio gemendo 😈", 
            preco: "", 
            checkoutLink: "" // Sem link de checkout
        },
        { 
            id: 11, 
            nome: "Avalio seu pau 😏", 
            preco: "", 
            checkoutLink: "" // Sem link de checkout
        }
    ];

    const packsSection = document.getElementById('packs');
    const produtosAvulsosSection = document.getElementById('produtos-avulsos');

    // Renderizar packs
    packs.forEach(pack => {
        const packDiv = document.createElement('div');
        packDiv.className = 'pack';

        // Cabeçalho do pack
        const packHeader = document.createElement('div');
        packHeader.className = 'pack-header';

        const packTitle = document.createElement('div');
        packTitle.className = 'pack-title';
        packTitle.innerHTML = pack.nome; // Permite emojis

        const arrow = document.createElement('span');
        arrow.className = 'arrow';
        arrow.textContent = '▶';

        packHeader.appendChild(packTitle);
        packHeader.appendChild(arrow);
        packDiv.appendChild(packHeader);

        // Área de produtos
        const produtosDiv = document.createElement('div');
        produtosDiv.className = 'produtos';

        pack.produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.className = 'produto';

            // Verifica se o botão deve ser "Consulte"
            const botaoTexto = !produto.preco || !produto.checkoutLink ? 'Consulte' : 'Comprar';
            
            produtoDiv.innerHTML = `
                <p>${produto.nome} ${produto.preco ? `- ${produto.preco}` : ''}</p>
                <button type="button" onclick="${botaoTexto === 'Consulte' ? 'consultarProduto()' : `comprarArquivo('${produto.checkoutLink}', '${pack.id}-${produto.id}')`}">
                    ${botaoTexto}
                </button>
            `;

            produtosDiv.appendChild(produtoDiv);
        });

        packDiv.appendChild(produtosDiv);
        packsSection.appendChild(packDiv);

        // Evento de expansão
        packHeader.addEventListener('click', () => {
            const isVisible = produtosDiv.style.display === 'block';
            produtosDiv.style.display = isVisible ? 'none' : 'block';
            arrow.classList.toggle('down', !isVisible);
        });
    });

    // Renderizar produtos avulsos
    produtosAvulsos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';

        // Verifica se o botão deve ser "Consulte"
        const botaoTexto = !produto.preco || !produto.checkoutLink ? 'Consulte' : 'Comprar';
        
        produtoDiv.innerHTML = `
            <p>${produto.nome} ${produto.preco ? `- ${produto.preco}` : ''}</p>
            <button type="button" onclick="${botaoTexto === 'Consulte' ? 'consultarProduto()' : `comprarArquivo('${produto.checkoutLink}', 'avulso-${produto.id}')`}">
                ${botaoTexto}
            </button>
        `;

        produtosAvulsosSection.appendChild(produtoDiv);
    });

    window.comprarArquivo = function(checkoutLink, produtoId) {
        if (!checkoutLink) {
            alert('Selecione um produto válido');
            return;
        }
        
        // Abre o checkout em uma nova aba sem monitorar o fechamento
        window.open(checkoutLink, '_blank');
    };

    window.consultarProduto = function() {
        alert('Entre em contato para mais informações sobre este produto.');
    };
});
