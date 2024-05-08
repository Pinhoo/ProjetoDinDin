var extrato = [
    {data:'07/05/2024 20:19', valor: 150, tipo: 'Saida', descricao :'KFC'},
    {data:'07/05/2024 20:22', valor: 1500, tipo: 'Entrada', descricao :'Lojas Americanas Ltda'},
    {data:'02/05/2024 20:23', valor: 700, tipo: 'Saida', descricao :'Senac Santo Amaro'},
    {data:'20/04/2024 20:23', valor: 30, tipo: 'Entrada', descricao :'Campus Pasta Grill'},
    {data:'07/04/2024 21:12', valor: 1500, tipo: 'Entrada', descricao :'Lojas Americanas Ltda'}
];



function preencherDadosArray()
{
    var idGrid = document.getElementById('gridPrincipal');
    extrato.forEach(
    function(transacao)
    {
        var DivDataTransacao = document.createElement('div');
        DivDataTransacao.classList.add('grid-item');
        DivDataTransacao.textContent = transacao.data;
        idGrid.appendChild(DivDataTransacao);
        console.count(transacao.data)

        var DivValor= document.createElement('div');
        DivValor.classList.add('grid-item');
        DivValor.textContent = transacao.valor;
        idGrid.appendChild(DivValor);

       
        var DivTipoTransacao = document.createElement('div');
        DivTipoTransacao.classList.add('grid-item');
        DivTipoTransacao.textContent = transacao.tipo;
        idGrid.appendChild(DivTipoTransacao);

        var DivDescricaoTransacao = document.createElement('div');
        DivDescricaoTransacao.classList.add('grid-item');
        DivDescricaoTransacao.textContent = transacao.descricao
        idGrid.appendChild(DivDescricaoTransacao);
    }
    );
}

preencherDadosArray();