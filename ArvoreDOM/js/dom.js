function incluir(){

    var texto = document.meuForm.texto.value;

    if (texto != '') {
        var lista = document.getElementById('minhaLista');
        var novoItem = document.createElement('li');

        var novoTexto = document.createTextNode(texto);

        novoItem.appendChild(novoTexto);
        lista.appendChild(novoItem);        
    }
    limpar();
}
function limpar(){
    var texto = document.getElementById('texto');
    texto.value = '';
    texto.focus();
}