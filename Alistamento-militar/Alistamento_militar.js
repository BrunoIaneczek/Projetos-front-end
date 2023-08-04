function verificar() {
    var DataAtual = new Date()
    var AnodeNascimentodoJovem = document.getElementById('txtanonasc')
    var res = document.getElementById('res')
    var AnoAtual = DataAtual.getFullYear()
    var IdadedoJovem = AnoAtual - Number(AnodeNascimentodoJovem.value)
    if (AnodeNascimentodoJovem.value.length == 0 || AnodeNascimentodoJovem.value > AnoAtual){
        window.alert('Verique o ano de nascimento novamente!')
    }else{
        if (IdadedoJovem < 18){
            var TempoparaAlistamento = 18 - IdadedoJovem
           
        }else if(IdadedoJovem == 18){
            var TempoparaAlistamento = 0
            
        }else{
            var TempoparaAlistamento = IdadedoJovem - 18
            
        }
        if (IdadedoJovem == 18){
            res.style.textAlign = 'center'
            res.innerHTML = `A sua idade é de ${IdadedoJovem} está na hora de se alistar!`
        
        }else if (IdadedoJovem >  18){
            res.style.textAlign = 'center'
            res.innerHTML = `A sua idade é de ${IdadedoJovem} e você já deveria ter se alistado há ${TempoparaAlistamento} anos atrás!`
        }else{
            res.style.textAlign = 'center'
            res.innerHTML = `A sua idade é de ${IdadedoJovem} anos e falta ${TempoparaAlistamento} anos para se alistar!`
        }
    }

    


    }