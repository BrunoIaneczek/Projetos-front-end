//Definindo variáveis
var semaforo = document.getElementById('semaforo')
var redLigth = document.getElementById('red')
var yellowLigth = document.getElementById('yellow')
var greenLigth = document.getElementById('green')
var automatico = document.getElementById('auto')
var lightIndex = 0
let interValId = null



//Cosntruindo funções
const redOn = ()=>{
    semaforo.src = 'img/vermelho.png' 
}

const yellowOn = ()=>{
    semaforo.src = 'img/amarelo.png'
}

const greenOn = ()=>{
    semaforo.src = 'img/verde.png'
}

//Ativando funções por eventos
redLigth.addEventListener('click',redOn)
yellowLigth.addEventListener('click',yellowOn)
greenLigth.addEventListener('click',greenOn)

