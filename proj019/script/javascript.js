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
    pegarElemento("#convRtoD").classList.remove("cor-laranja");
    pegarElemento("#convDtoR").classList.remove("cor-laranja");
});

function adicionarNumero(num) { /* adiciona numero no display e pinta o botao conversor de laranja */
    var display = pegarElemento(".display");    
    display.value += num;
    if(display.value != "") {
        pegarElemento("#convRtoD").classList.add("cor-laranja");
        pegarElemento("#convDtoR").classList.add("cor-laranja");
    }
}

pegarElemento("#convDtoR").addEventListener("click", function() { /* se o display estiver limpo, muda o botao para conversao de real para dolar*/
    var display = pegarElemento(".display");
    if (display.value == "") {
        mudarRealDolar();
    }
});

pegarElemento("#convRtoD").addEventListener("click", function() { /* se o display estiver limpo, muda o botao para conversao de dolar para real*/
    var display = pegarElemento(".display");
    if (display.value == "") {
        mudarDolarReal();
    }
});

function mudarRealDolar() { /* funcao que esconde botao dolar para real e exibe real para dolar*/
    pegarElemento("#convDtoR").classList.add("escondido");
    pegarElemento("#convRtoD").classList.remove("escondido");
}

function mudarDolarReal() {
    pegarElemento("#convRtoD").classList.add("escondido"); /* funcao que esconde botao real pra dolar e exibe dolar para real*/
    pegarElemento("#convDtoR").classList.remove("escondido");
}