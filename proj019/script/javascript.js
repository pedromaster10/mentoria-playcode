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

function adicionarNumero(num) {
    var display = pegarElemento(".display");    
    display.value += num;
}