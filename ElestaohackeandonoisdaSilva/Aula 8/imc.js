function Imc () {
    var alt = parseFloat(document.getElementById("alt").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var resposta = document.getElementById("resposta");
    var Imc='';
    var altura = alt * alt
        Imc = peso / altura
    
    if (Imc < 18,5){
        resposta.innerHTML = Imc + ' Abaixo o peso';
    }

    if (Imc >= 18,5 & Imc <= 24,9 ){
            resposta.innerHTML = Imc + ' Peso normal';
        }

    if (Imc >= 25 & Imc <= 29,9 ){
        resposta.innerHTML = Imc + ' Sobrepeso';
    }
}