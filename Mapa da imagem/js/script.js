
function explanationObjectsQuadroUm(){
    explain('1º Quadro','Uma reflexão sobre o amor.');
}
function explanationObjectsQuadroDois(){
    explain('2º Quadro','Modelo estético para trazer elegância ao ambiente.');
}
function explanationObjectsComputador(){
    explain('Computador','Um conjunto de peças eletrônicas e eletromecânicas que tem a função de receber, armazenar e processar dados, além de fornecer informações. Tudo isso de forma automatica.');
}
function explanationObjectsMonitor(){
    explain('Monitor','Hardware responsável por reproduzir a saída de imagem.');
}
function explanationObjectsImpressora(){
    explain('Impressora','Hardware responsável por imprimir documentos.');
}
function explain(title, body){
    var msgTitle = document.querySelector('#explanation .title');
    var msgBody = document.querySelector('#explanation .body');

    msgTitle.innerHTML = title
    msgBody.innerHTML = body
}



