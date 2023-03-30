 /* Chama a função*/
 function consultaCep() {
            
    //validação
    let cep = document.querySelector('#cep').value;
    
    if (cep.length === 0) {
        alert('Digite um CEP para consulta!')
        return;
    }

    if (cep.length  < 8 || cep.length >= 9) {
        alert('CEP inválido!')  
        return;                                              
    }          
    
    
    let url = `https://viacep.com.br/ws/${cep}/json/`;            
    
    fetch(url).then(function(response){
        response.json().then(function(data) {                                                           
             console.log(data);
            console.log(response)
            mostraDados(data);
        })
    });
}



function mostraDados(dados) {
    let consulta = document.querySelector('#consulta');
    if (dados.erro) {
        alert('CEP não encontrado!');
    } else {
        consulta.innerHTML = `<p>CEP: ${dados.cep}</p>
                           <p>Endereço: ${dados.logradouro}</p>
                           <p>DDD: ${dados.ddd}</p>
                           <p>Complemento: ${dados.complemento}</p>
                           <p>Bairro: ${dados.bairro}
                           <p>Cidade: ${dados.localidade} - ${dados.uf} </p>`
    }           

    
}