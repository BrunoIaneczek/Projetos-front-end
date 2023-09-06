//Definindo botoes
const btn_reset = document.querySelector('#botao-reset')
const btn_apaga = document.getElementById('botao-apaga')
const btn_igual = document.getElementById('botao-igual')
const entrada   = document.getElementById('resultado')


//Função que inseri número na tela e operaçã desejada
const armazena=(num)=>{
    numero = entrada.innerHTML;
    entrada.innerHTML = numero + num;
}

//Função que apaga ultimo número digitado
const apaga=()=>{
    let resultado =entrada.innerHTML;
   entrada.innerHTML = resultado.substring(0, resultado.length -1)
    
}

//Função que limpa a tela
const limpa=()=>{
   entrada.innerHTML = ''
}

//Função que formata numeros de entrada
const formataEntrada = (entrada,simb)=>{
    let resultadoString = entrada.join('')
    let valores = resultadoString.split(simb)
    return valores
}

//Função que retorna o resultado da operação
const resultado=()=>{
    const resultado = [...document.getElementById('resultado').innerHTML];
    resultado.map((e)=>{
        if(e =='+'){
            const valores = formataEntrada(resultado,'+')
            let resp = Number(valores[0])+Number(valores[1])
            if(resultado){
                entrada.innerHTML = resp
            }     
        }else if(e == '-'){
            const valores = formataEntrada(resultado,'-')
            let resp = Number(valores[0])-Number(valores[1])
            if(resultado){
                entrada.innerHTML = resp
            }  
        }else if(e == '*'){
            const valores = formataEntrada(resultado,'*')
            let resp = Number(valores[0])*Number(valores[1])
            if(resultado){
                entrada.innerHTML = resp
            }  
        }else if(e == '/'){
            const valores = formataEntrada(resultado,'/')
            let resp = Number(valores[0])/Number(valores[1])
            if(resultado){
                entrada.innerHTML = resp
            }  
        }
    })
}

btn_reset.addEventListener('click',limpa)
btn_apaga.addEventListener('click',apaga)
btn_igual.addEventListener('click',resultado)



