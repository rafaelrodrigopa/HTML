const pecas = document.querySelectorAll('.peca');
const dropzones = document.querySelectorAll('.dropzone');

pecas.forEach((peca) =>{
    peca.addEventListener('dragstart',dragstart);
    peca.addEventListener('drag',drag);
    peca.addEventListener('dragend',dragend);
})
function dragstart(){

    dropzones.forEach(dropzone => dropzone.classList.add('hightlight'))

    this.classList.add('is-dragging')
}
function drag(){

}
function dragend(){

    dropzones.forEach(dropzone => dropzone.classList.remove('hightlight'))

    this.classList.remove('is-dragging')
}
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter',dragenter);
    dropzone.addEventListener('dragover',dragover);
    dropzone.addEventListener('dragleave',dragleave);
    dropzone.addEventListener('drop',drop);
})
function dragenter(){
    log('Enter in zone')
}
function dragover(){
    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')
    this.appendChild(cardBeingDragged)

}
function dragleave(){
    this.classList.remove('over')
}
function drop(){
    this.classList.remove('over')
}