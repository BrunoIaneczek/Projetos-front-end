
function estaQuebrada(){
    return img.src.indexOf('quebrada') > -1
}

const acender = ()=>{
    if (!estaQuebrada()){
        document.getElementById('img').src = 'imgs/ligada.jpg'
    }
    
}
const desligar = ()=>{
    if (!estaQuebrada()){
        document.getElementById('img').src = 'imgs/desligada.jpg'
    }
}
const quebrar = ()=>{
    document.getElementById('img').src = 'imgs/quebrada.jpg'
}

var lampada = document.querySelector('img')
lampada.addEventListener('mouseover',acender)
lampada.addEventListener('mouseleave',desligar)