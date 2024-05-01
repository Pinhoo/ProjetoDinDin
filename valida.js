function cadastroFunc()
{

   const cpf = document.getElementById('cpf').value;
   const cnpj = document.getElementById('cnpj').value;


   
   if(cnpj != "" || cnpj != null){
        if(validarCNPJ(cnpj))
        {
            alert('CNPJ Válido');
            tentaCPF(cpf);
        
        }
        else
        {
            alert('CNPJ Inválido');
        }
    
    }
    else{
        tentaCPF(cpf);
    }

   

   
  
}

function loginFunc()
{

   const userNumber = document.getElementById('cpf').value;
   
   if(cpf != "" && cpf != null){
        if(validarCPF(userNumber) || validarCNPJ(userNumber) )
        {
            alert('CPF ou CNPJ Válido');
        }
        else
        {
            alert('CPF ou CNPJ Inválido');
        }
    }
   
  
}

function validarCPF(strCPF) {
    console.log("foi")
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

function logDownload(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const sexo = document.getElementById('sexo').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;

    const LogSite = 'Nome do Cliente: ' + nome + ' Email do Cliente: '  + email + ' Sexo do Cliente: ' +  sexo  + ' telefone do Cliente: ' +  telefone  + ' senha do Cliente: ' +  senha;
  
        const blob = new Blob([LogSite], { type: 'text/plain'  }) ;
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href= url;
        link.download = 'log3004.txt';
        document.body.appendChild(link);
        link.click();
}

function tentaCPF(cpf){
    if(cpf != "" && cpf != null){
        if(validarCPF(cpf))
        {
            alert('CPF Válido');
            logDownload();
        }
        else
        {
            alert('CPF Inválido');
        }
    }
}