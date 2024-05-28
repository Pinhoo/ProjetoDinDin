function validaLogin (){
    const users = [
        ["Rafael@gmail.com", 45652610069, 123],
        ["Lucas@gmail.com", 18255514058, "senha123"],
        ["Robson@gmail.com", 22121866060, "senhaNova"],
        ["Renato@gmail.com", 58161654026, "senha"],
        ["Jefferson@gmail.com", 55792292086, "123Senha"]
    ];

    const email = document.getElementById('EMAIL').value;
    const cpf = document.getElementById('CPF').value;
    const senha = document.getElementById('SENHA').value;
    const title = document.getElementById('telaTitle');


    if((email != "" || cpf != "") && senha != ""){
        for(let i = 0; i < users.length; i++){
            if((email == users[i][0] || cpf == users[i][1]) && senha == users[i][2]){        
                document.location.href = "../transferencias/telaopcao/telaopcao.html";
            }  
        }

        title.innerHTML = `
        <h2>Login</h2>
        <p class="errorMessage">Usuário ou senha incorretos</p>
        `
    
    }
    else{
        title.innerHTML = `
        <h2>Login</h2>
        <p class="errorMessage">Preencha os campos abaixo</p>
        `
    }

    
    
    
}

function validaCadastro(){
    const email = document.getElementById('EMAIL').value;
    const cpf = document.getElementById('CPF').value;
    const cnpj = document.getElementById('CNPJ').value;
    const senha = document.getElementById('SENHA').value;
    const telefone = document.getElementById('TELEFONE').value;
    const nome = document.getElementById('NOME').value;
    let sexo;
    try{sexo = document.querySelector('input[name="sexo"]:checked').value;}
    catch{}

    const title = document.getElementById('telaTitle');
    

    if( email != null && cpf != null && senha != null &&
        telefone != null && nome != null && sexo != null){
        
        if(validarCPF(cpf)){
            if(cnpj == "" || validarCNPJ(cnpj)){
                document.location.href = "../transferencias/telaopcao/telaopcao.html";
            }
            else{
                title.innerHTML = `
                    <h2>Cadastrar-se</h2>
                    <p class="errorMessage">CNPJ inválido</p>
                `
            }
        }
        else{
            title.innerHTML = `
                    <h2>Cadastrar-se</h2>
                    <p class="errorMessage">CPF inválido</p>
                `
        }

        

    }
    else{
        title.innerHTML = `
            <h2>Cadastrar-se</h2>
            <p class="errorMessage">Preencha os campos abaixo</p>
        `
    }
    
}

function validaTed(){
//const descricao = document.getElementById('DESCRICAO').value;

    const banco = document.getElementById('BANCO').value;
    const tipo = document.getElementById('TIPO').value;
    const agencia = document.getElementById('AGENCIA').value;
    const conta = document.getElementById('CONTA').value;
    const dv = document.getElementById('DV').value;
    const pessoa = document.getElementById('PESSOA').value;
    const nome = document.getElementById('NOME').value;
    const finalidade = document.getElementById('FINALIDADE').value;
    const valor = document.getElementById('VALOR').value;

    const cpfOUcnpj = document.getElementById('CPF').value;
    
    const message = document.getElementById('errorLocation');
    
    const buttonHTML = `
    
    <input required="" type="button" name="transferir" value="Transferir" class="botao-transferir" onclick="validaTed()">
    
    `

    if( banco != '' && tipo != '' && agencia != '' &&
        conta != '' && dv != '' && pessoa != '' &&
        nome != '' && finalidade != '' && valor != '' && 
        cpfOUcnpj != ''){
        
        if(validarCPF(cpfOUcnpj) || validarCNPJ(cpfOUcnpj)){
            if(validarValor(valor)){
                message.innerHTML = ` 
                <p class="approvalMessage">Sua transferência foi realizada com sucesso</p>
                <a class="botao-voltar" href="../telaopcao/telaopcao.html">Voltar</a>
            `
            }
            else{
                message.innerHTML =`
                <p class="errorMessage">Valor inválido</p>
            ` + buttonHTML
            }
           
        }
        else{
            message.innerHTML =`
                    <p class="errorMessage">CPF/CNPJ inválido</p>
                ` + buttonHTML
        }

        

    }
    else{
        message.innerHTML = `
            <p class="errorMessage">Preencha os campos da tranferência</p>
        ` + buttonHTML
    }
}

function validaPix(){
//const descricao = document.getElementById('DESCRICAO').value;

    const chave = document.getElementById('CHAVE').value;
    const valor = document.getElementById('VALOR').value;
    const senha = document.getElementById('SENHA').value;

    const message = document.getElementById('errorLocation');
    const buttonHTML = `
    
    <input required="" type="button" name="transferir" name="transferir" value="Transferir" class="botao-transferir" onclick="validaPix()">
    `

    if(chave != '' && senha != '' && valor != ''){
        
            if(validarValor(valor)){
                message.innerHTML = ` 
                <a class="botao-voltar" href="../telaopcao/telaopcao.html">Voltar</a>
                <p class="approvalMessage">Seu Pix foi realizado com sucesso</p>
                
                `
            }
            else{
                message.innerHTML = buttonHTML +`
                <p class="errorMessage">Valor inválido</p>
                ` 
            }
    }
    else{
        message.innerHTML = buttonHTML +`
        <p class="errorMessage">Preencha os campos da tranferência</p>
        `
    }
    
}

function validarCPF(strCPF) {

var Soma;
var Resto;
Soma = 0;
if (strCPF == "00000000000") return false;

for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
Resto = (Soma * 10) % 11;

if ((Resto == 10) || (Resto == 11))  Resto = 0;
if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

Soma = 0;
for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
Resto = (Soma * 10) % 11;

if ((Resto == 10) || (Resto == 11))  Resto = 0;
if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
return true;
}

function validarCNPJ(cnpj) {
 
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

function validarValor(valor){
    if(parseFloat(valor) == valor){
        return true;
    }
    else{
        return false;
    }
}