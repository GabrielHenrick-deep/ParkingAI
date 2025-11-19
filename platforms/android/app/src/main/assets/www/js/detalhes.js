fetch('http://192.168.15.14:8080/vaga')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na resposta: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Verifique se os dados estão corretos

        // Limpa o grid de vagas exibidas
        $("#vaga").empty(); 

        // Gera o HTML das vagas dinamicamente
        data.forEach(vaga => {
            var vagaHTML = `
            <div class="parking-lot ${vaga.status}"><span>${vaga.numero}</span></div>`;
            
            // Adiciona a vaga no grid
            $("#vaga").append(vagaHTML);
        });

        // Se precisar de eventos de clique em vagas, adicione aqui
        $(".vaga").on('click', function(){
            var id = $(this).attr('id');
            console.log(`Vaga ${id} foi clicada!`);
            
        });
    })
    .catch(error => {
        console.error('Erro ao fazer fetch dos dados: ' + error);
    });
