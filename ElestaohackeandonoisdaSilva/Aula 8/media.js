function Media () {
    var num = parseInt(document.getElementById("num").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var resposta = document.getElementById("resposta");
    var Media='';

     Media = (num + num2 + num3) / 3

    resposta.innerHTML = Media;
}