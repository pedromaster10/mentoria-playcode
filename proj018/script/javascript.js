function calculaIMC() {
    var altura = document.getElementById("inputAltura").value;
    var peso = document.getElementById("inputPeso").value;
    var botao = document.getElementById("btn");

    var resultado;

    resultado = (peso / (altura * altura));

    
        botao.value = resultado + "muito pesado";
}

