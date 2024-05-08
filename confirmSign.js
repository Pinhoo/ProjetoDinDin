var dados = [
    {Nome:'Rafael', Email: 'Email@gmail.com', Sexo: 'Masculino', Telefone :'11912345678', Senha: '123', CPF: "123.456.789-10", CNPJ: "Vazio"}
];



function preencherDadosArray()
{
    var idGrid = document.getElementById('gridPrincipal');
    dados.forEach(
    function(transacao)
    {
        var DivDataTransacao = document.createElement('div');
        DivDataTransacao.classList.add('grid-item');
        DivDataTransacao.textContent = "Nome: " + transacao.Nome;
        idGrid.appendChild(DivDataTransacao);
        console.count(transacao.Nome)

        var DivValor= document.createElement('div');
        DivValor.classList.add('grid-item');
        DivValor.textContent = "Email: " + transacao.Email;
        idGrid.appendChild(DivValor);

       
        var DivTipoTransacao = document.createElement('div');
        DivTipoTransacao.classList.add('grid-item');
        DivTipoTransacao.textContent = "Sexo: " + transacao.Sexo;
        idGrid.appendChild(DivTipoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = "Telefone: " + transacao.Telefone
        idGrid.appendChild(DivDescricaoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent =  "Senha: " + transacao.Senha
        idGrid.appendChild(DivDescricaoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = "CPF: " + transacao.CPF
        idGrid.appendChild(DivDescricaoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = "CNPJ: " + transacao.CNPJ
        idGrid.appendChild(DivDescricaoTransacao);
    }
    );
}

preencherDadosArray();