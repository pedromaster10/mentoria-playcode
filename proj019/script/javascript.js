function pegarElemento(elemento) {
    return document.querySelector(elemento);
}

function pegarTodosElementos(elemento){
    return document.querySelectorAll(elemento);
}

var botoes = pegarTodosElementos(".num"); /* este for percorre todos os elementos da classe .num e adiciona  */
for(var i=0; i< botoes.length; i++){      /* listeners com os respectivos values para todos os botoes, menos para o botao C*/
    botoes[i].addEventListener("click", function(){ /* Se o value for C, o mesmo realiza o procedimento de limpar o Display*/
        if(this.value != 'C') {
            adicionarNumero(this.value);
        } else {
            var display = pegarElemento(".display");
             display.value = "";
            pegarElemento("#convRtoD").classList.remove("cor-laranja");
            pegarElemento("#convDtoR").classList.remove("cor-laranja");
        }
        
    })
}

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
    } else {
        converteDolarReal();
    }
});

pegarElemento("#convRtoD").addEventListener("click", function() { /* se o display estiver limpo, muda o botao para conversao de dolar para real*/
    var display = pegarElemento(".display");
    if (display.value == "") {
        mudarDolarReal();
    } else {
        converteRealDolar();
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

function converteRealDolar() {
    let display1 = pegarElemento(".display");
    let numero = parseInt(display1.value);
    numero = numero * 0.19;
    display1.value =numero.toString();
}

function converteDolarReal() {
    let display2 = pegarElemento(".display");
    let numero = parseInt(display2.value);
    numero = numero * 5.22;
    display2.value = numero.toString();
}