function pegarElemento(elemento) {
    return document.querySelector(elemento);
}

pegarElemento("#botao1").addEventListener("click", function() {
    adicionarNumero();
});

function adicionarNumero() {
    var display = pegarElemento(".display");    
    display.value += 1;
}