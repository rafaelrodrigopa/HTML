

function fadeInHeader(r,g,b){
    let header = window.document.querySelector('#header')
    let wrapper = window.document.querySelector('#wrapper')

    wrapper.style.opacity = 1
    header.style.background = `linear-gradient(rgb(${r}, ${g}, ${b}),rgba(255,255,255,0.7))`
}
function fadeOutHeader(r,g,b){
    let header = window.document.querySelector('#header')
    header.style.background = `linear-gradient(rgb(${r}, ${g}, ${b}),rgba(255,255,255,0.7))`
}