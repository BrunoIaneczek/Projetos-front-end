function analisar(){
    var Lado1 = document.getElementById('lado1')
    var Lado2 = document.getElementById('lado2') 
    var Lado3 = document.getElementById('lado3') 
    var TipoTriangulo = ''
    var res = document.getElementById('res')
    if ( Lado1.value != Lado2.value && Lado1.value != Lado3.value){
        TipoTriangulo = 'Triângulo escaleno'
    }else if (Lado1.value == Lado2.value && Lado1.value == Lado3.value){
        TipoTriangulo = 'Triângulo equilátero '
    }else{
        TipoTriangulo = 'Triângulo isósceles'
    }
    res.style.textAlign = 'center'
    res.innerHTML = `O triângulo com estes lados este triângulo  é do tipo ${TipoTriangulo}.`
    
}