function pegarElemento(elemento) {
    return document.querySelector(elemento);
}

pegarElemento("#botao1").addEventListener("click", function() {
    adicionarNumero(1);
});

pegarElemento("#botao2").addEventListener("click", function() {
    adicionarNumero(2);
});

pegarElemento("#botao3").addEventListener("click", function() {
    adicionarNumero(3);
});

pegarElemento("#botao4").addEventListener("click", function() {
    adicionarNumero(4);
});

pegarElemento("#botao5").addEventListener("click", function() {
    adicionarNumero(5);
});

pegarElemento("#botao6").addEventListener("click", function() {
    adicionarNumero(6);
});

pegarElemento("#botao7").addEventListener("click", function() {
    adicionarNumero(7);
});

pegarElemento("#botao8").addEventListener("click", function() {
    adicionarNumero(8);
});

pegarElemento("#botao9").addEventListener("click", function() {
    adicionarNumero(9);
});

pegarElemento("#botao0").addEventListener("click", function() {
    adicionarNumero(0);
});

pegarElemento("#botaoC").addEventListener("click", function() {
    var display = pegarElemento(".display");
    display.value = "";
});

function adicionarNumero(num) {
    var display = pegarElemento(".display");    
    display.value += num;
}

pegarElemento("#convDtoR").addEventListener("click", function() {
    mudarRealDolar();
});

pegarElemento("#convRtoD").addEventListener("click", function() {
    mudarDolarReal();
});

function mudarRealDolar() {
    pegarElemento("#convDtoR").classList.add("escondido");
    pegarElemento("#convRtoD").classList.remove("escondido");
}

function mudarDolarReal() {
    pegarElemento("#convRtoD").classList.add("escondido");
    pegarElemento("#convDtoR").classList.remove("escondido");
}