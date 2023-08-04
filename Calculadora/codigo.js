//função que inseri número na tela e operaçã desejada
function armazena(num){
    numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    
}

//função que apaga ultimo número digitado
function apaga(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    console.log(resultado)
}

//função que limpa a tela
function limpa(){
    document.getElementById('resultado').innerHTML = ''
}

// funcao que realiza as operações aritméticas
function calcula(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}