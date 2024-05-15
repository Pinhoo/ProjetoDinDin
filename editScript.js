let edit = false;

function editForm(){
    if(!edit){
        const editB = document.getElementById('editButton');
        editB.classList.add('desactivatedButton');
        console.log("foi")

        const saveB = document.getElementById('saveButton');
        saveB.classList.remove('desactivatedButton');
        
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const sexo = document.getElementById('sexo');
        const telefone = document.getElementById('telefone');
        const senha = document.getElementById('senha');

        nome.disabled = false;
        email.disabled = false;
        sexo.disabled = false;
        telefone.disabled = false;
        senha.disabled = false;
        


        edit = true;
    }
}

function saveForm(){
    if(edit){
        const saveB = document.getElementById('saveButton');
        saveB.classList.add('desactivatedButton');
        console.log("foi")
        
        const editB = document.getElementById('editButton');
        editB.classList.remove('desactivatedButton');
        
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const sexo = document.getElementById('sexo');
        const telefone = document.getElementById('telefone');
        const senha = document.getElementById('senha');

        nome.disabled = true;
        email.disabled = true;
        sexo.disabled = true;
        telefone.disabled = true;
        senha.disabled = true;

        logDownload();

        edit = false;

        
    }
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

