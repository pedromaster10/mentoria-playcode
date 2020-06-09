function pegarElemento(elemento) {
    return document.querySelector(elemento);
}

function mostrarResultado() {
    pegarElemento(".resultado").classList.remove("escondido");
    pegarElemento(".botaoIMC").classList.add("escondido");
}

function mostrarBotao() {
    pegarElemento(".resultado").classList.add("escondido");
    pegarElemento(".botaoIMC").classList.remove("escondido");
}

pegarElemento(".botaoIMC").addEventListener("click",mostrarResultado, calculaIMC);
pegarElemento(".voltar").addEventListener("click", mostrarBotao);


 function calculaIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;

    var resultado;

    resultado = (parseInt(peso) / (parseInt(altura) * parseInt(altura)));
    if (resultado < 16 ) {
        const valorImc = pegarElemento(".imcValor");
        valorImc.innerHTML = resultado;
        const desIMC = pegarElemento(".imcDesc");
        desIMC.innerHTML =  "Magreza Grave";
    } else {
        valorImc.innerHTML = 99;
        desIMC.innerHTML = "gordao";
    }
}

