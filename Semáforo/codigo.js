const botoes = document.getElementById('botoes')


const acenderluz = (event) => {
    acender[event.target.id]();
}

const acender = {
    'vermelho-ligado': ()=> document.getElementById('vermelho').style.backgroundColor = 'red'
    

}

botoes.addEventListener('click',acenderluz)