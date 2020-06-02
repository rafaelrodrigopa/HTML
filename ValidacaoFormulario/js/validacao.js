function validaForm(){
    var nome = document.forms["meuForm"]["nome"].value;
    var telefone = document.forms["meuForm"]["telefone"].value;

    if (nome == "") {
        alert("Preencher o nome");
        return false;
    }else if (telefone == "") {
        alert("Preencher o telefone");
        return false;
    }
}