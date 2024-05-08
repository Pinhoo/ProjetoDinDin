var cad = [
    {data:'07/05/2024 20:19', Nome:'Rafael', Email: 'RafaelEmail@gmail.com', Sexo: 'Masculino', Telefone :'11912345678', Senha: 'Senha123', CPF: "98765432190", CNPJ: "Vazio"},
    {data:'04/05/2024 20:19', Nome:'Renato', Email: 'RenatoEmail@gmail.com', Sexo: 'Masculino', Telefone :'11912343678', Senha: '123', CPF: "98765432170", CNPJ: "Vazio"},
    {data:'01/05/2024 20:19', Nome:'Lucas', Email: 'LucasEmail@gmail.com', Sexo: 'Masculino', Telefone :'11916345678', Senha: '113', CPF: "98765432161", CNPJ: "Vazio"},
];

var login = [
    {data:'07/05/2024 20:19', CPF: 98765432190, Senha: 'Senha123', Estado :'Senha Correta'},
    {data:'07/05/2024 20:22', CPF: 98765432190, Senha: 'A123@', Estado :'Senha incorreta'},
    {data:'07/05/2024 20:23', CPF: 98765432190, Senha: '123@', Estado :'Senha incorreta'},
    {data:'07/05/2024 20:23', CPF: 98765432190, Senha: '123', Estado :'Senha incorreta'},
    {data:'06/05/2024 21:12', CPF: 12345678910, Senha: 'Entrada', Estado :'Logado'}
];

function preencherDadosArrayCad()
{
    var idGrid = document.getElementById("gridCadastro");
    cad.forEach(
    function(transacao)
    {
        var DivDataTransacao = document.createElement('div');
        DivDataTransacao.classList.add('grid-item');
        DivDataTransacao.textContent = transacao.data;
        idGrid.appendChild(DivDataTransacao);
        console.count(transacao.data)

        var DivDataTransacao = document.createElement('div');
        DivDataTransacao.classList.add('grid-item');
        DivDataTransacao.textContent = transacao.Nome;
        idGrid.appendChild(DivDataTransacao);
        console.count(transacao.Nome)

        var DivValor= document.createElement('div');
        DivValor.classList.add('grid-item');
        DivValor.textContent = transacao.Email;
        idGrid.appendChild(DivValor);

       
        var DivTipoTransacao = document.createElement('div');
        DivTipoTransacao.classList.add('grid-item');
        DivTipoTransacao.textContent = transacao.Sexo;
        idGrid.appendChild(DivTipoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = transacao.Telefone
        idGrid.appendChild(DivDescricaoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent =transacao.Senha
        idGrid.appendChild(DivDescricaoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = transacao.CPF
        idGrid.appendChild(DivDescricaoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = transacao.CNPJ
        idGrid.appendChild(DivDescricaoTransacao);
    }
    );
}


function preencherDadosArray()
{
    var idGrid = document.getElementById("gridLogin");
    login.forEach(
    function(transacao)
    {
        var DivDataTransacao = document.createElement('div');
        DivDataTransacao.classList.add('grid-item');
        DivDataTransacao.textContent = transacao.data;
        idGrid.appendChild(DivDataTransacao);
        console.count(transacao.data)

        var DivValor= document.createElement('div');
        DivValor.classList.add('grid-item');
        DivValor.textContent = transacao.CPF;
        idGrid.appendChild(DivValor);

       
        var DivTipoTransacao = document.createElement('div');
        DivTipoTransacao.classList.add('grid-item');
        DivTipoTransacao.textContent = transacao.Senha;
        idGrid.appendChild(DivTipoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = transacao.Estado
        idGrid.appendChild(DivDescricaoTransacao);
    }
    );
}

preencherDadosArrayCad();
preencherDadosArray();