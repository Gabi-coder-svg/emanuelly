document.addEventListener('DOMContentLoaded', function() {
    const packs = [
        {
            id: 1,
            nome: "🔥 Pack da safadinha 🔥",
            produtos: [
                { 
                    id: 1, 
                    nome: "2 fotos + 1 vídeo", 
                    preco: "6.00", 
                    checkoutLink: "" 
                },
                { 
                    id: 2, 
                    nome: "4 fotos + 2 vídeos", 
                    preco: "8.50", 
                    checkoutLink: "" 
                },
                { 
                    id: 3, 
                    nome: "5 fotos + 3 vídeos", 
                    preco: "10.00", 
                    checkoutLink: "" 
                },
                { 
                    id: 4, 
                    nome: "6 fotos + 4 vídeos", 
                    preco: "14.00", 
                    checkoutLink: "" 
                },
                { 
                    id: 5, 
                    nome: "12 fotos + 6 vídeos", 
                    preco: "40.00", 
                    checkoutLink: "" 
                }
            ]
        },
        {
            id: 2,
            nome: "🔥😈 Vídeos 😈🔥",
            produtos: [
                { 
                    id: 1, 
                    nome: "boquete 🤤", 
                    preco: "20.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 2, 
                    nome: "masturbando até gozar 💦", 
                    preco: "25.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                },
                { 
                    id: 3, 
                    nome: "10 vídeos", 
                    preco: "35.00", 
                    checkoutLink: "https://pay.cakto.com.br/9DHfhEU" 
                }
            ]
        }
    ];

    const packsSection = document.getElementById('packs');

    packs.forEach(pack => {
        const packDiv = document.createElement('div');
        packDiv.className = 'pack';

        // Cabeçalho do pack (com seta)
        const packHeader = document.createElement('div');
        packHeader.className = 'pack-header';

        const packTitle = document.createElement('div');
        packTitle.className = 'pack-title';
        packTitle.textContent = pack.nome;

        const arrow = document.createElement('span');
        arrow.className = 'arrow';
        arrow.textContent = '▶';

        packHeader.appendChild(packTitle);
        packHeader.appendChild(arrow);
        packDiv.appendChild(packHeader);

        // Área de produtos (inicialmente escondida)
        const produtosDiv = document.createElement('div');
        produtosDiv.className = 'produtos';

        pack.produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.className = 'produto';

            // ID único para o produto: packId-produtoId
            const produtoIdUnico = `${pack.id}-${produto.id}`;

            produtoDiv.innerHTML = `
                <p>${produto.nome} - R$ ${produto.preco}</p>
                <button onclick="comprarArquivo('${produto.checkoutLink}', '${produtoIdUnico}')">Comprar</button>
            `;

            produtosDiv.appendChild(produtoDiv);
        });

        packDiv.appendChild(produtosDiv);
        packsSection.appendChild(packDiv);

        // Evento para expandir/recolher o pack
        packHeader.addEventListener('click', () => {
            produtosDiv.style.display = produtosDiv.style.display === 'block' ? 'none' : 'block';
            arrow.classList.toggle('down');
        });
    });

    window.comprarArquivo = function(checkoutLink, produtoIdUnico) {
        const checkoutWindow = window.open(checkoutLink, '_blank');

        // Monitora se o checkout foi aberto e redireciona para success.html
        const checkWindow = setInterval(() => {
            if (checkoutWindow && !checkoutWindow.closed) {
                clearInterval(checkWindow);
                window.location.href = "success.html";
            }
        }, 1000);

        // Exemplo de uso do produtoIdUnico (opcional)
        console.log(`Produto comprado: ${produtoIdUnico}`);
    };
}); 
