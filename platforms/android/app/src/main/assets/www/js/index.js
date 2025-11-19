fetch('http://192.168.15.14:8080/produtos')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na resposta: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Verifique se os dados estão corretos

        // Limpa os produtos exibidos
        $("#produtos").empty(); 

        // Gera o HTML dos produtos
        data.forEach(produto => {
            var produtoHTML = `<div class="item-card">
                <a data-id="${produto.nome}" href="/detalhes/"class="item">
                    <div class="card-content">
                        <div class="img-container">
                            <img src="${produto.imagem}" alt="${produto.nome}">
                        </div>
                        <div class="details-container">
                            <div class="nome-rating">
                                <span class="name bold">${produto.nome}</span>
                                <span class="rating margin-right">
                                    <i class="mdi mdi-star"></i> 
                                    ${produto.rating}
                                </span>
                            </div>
                            <div class="endereco">
                                ${produto.endereco}
                            </div>
                        </div>
                    </div>
                </a>
            </div>`;
            
            $("#produtos").append(produtoHTML);
        });
    $(".item").on('click', function(){
        var id = $(this).attr('data-id');
        localStorage.setItem('detalhe', id);
        app.views.main.router.navigate('/detalhes');
    });
    })
    .catch(error => {
        console.error('Erro ao fazer fetch dos dados: ' + error);
    });
