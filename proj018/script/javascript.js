function pegarElemento(elemento) {
    return document.querySelector(elemento);
}

function mostrarResultado() {
    pegarElemento(".resultado").classList.remove("escondido");
    pegarElemento(".botaoIMC").classList.add("escondido");
    
    if (document.getElementById("altura").value == "") {
        window.alert("digite a altura!");
        document.getElementById("altura").focus();
    } else if (document.getElementById("peso").value == "") {
        window.alert("digite o peso!");
        document.getElementById("peso").focus();
    } else {
        calcularIMC();
    }
    
}

function mostrarBotao() {
    pegarElemento(".resultado").classList.add("escondido");
    pegarElemento(".botaoIMC").classList.remove("escondido");
}

pegarElemento(".botaoIMC").addEventListener("click", function() {
    mostrarResultado();
} );
pegarElemento(".voltar").addEventListener("click", function() {
    mostrarBotao();
} );

function calcularIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var resultado = peso /  (altura * altura);

  
        var imcValor = pegarElemento(".imcValor");
        var imcDesc = pegarElemento(".imcDesc");

        imcValor.innerHTML = resultado.toLocaleString("pt-br", {maximumFractionDigits: 2});
        
        if (resultado < 16 ){
            imcDesc.innerHTML =  "Magreza Grave";
        } else if (resultado >= 16 && resultado < 17){
            imcDesc.innerHTML =  "Magreza Moderada";
        } else if (resultado >= 17 && resultado < 18.5){
            imcDesc.innerHTML =  "Magreza leve";
        } else if (resultado >= 18.5 && resultado < 25){
            imcDesc.innerHTML =  "Saudavel";
        } else if (resultado >= 25 && resultado < 30){
            imcDesc.innerHTML =  "Sobrepeso";
        } else if (resultado >= 30 && resultado < 35){
            imcDesc.innerHTML =  "Obesidade Grau I";
        } else if (resultado >= 35 && resultado < 40){
            imcDesc.innerHTML =  "Obesidade Grau II (severa)";
        } else if (resultado > 40){
            imcDesc.innerHTML =  "Obesidade Grau III (mórbida)";
        }
}