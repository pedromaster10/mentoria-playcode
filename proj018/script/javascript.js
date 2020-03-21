function calculaIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var botao = document.getElementsByClassName("botaoIMC");

    var resultado;

    resultado = (peso / (altura * altura));

    
        botao.value = resultado + "muito pesado";
}

