$( document ).ready(function() {

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

    // seta o endpoint e a chave da API
    endpoint = 'convert';
    acess_key = '19c1d9621048a16b7184f648cd3307ba';

    //define a moeda inicial, a moeda alvo e o valor
    from = 'BRL';
    to = 'USD';
    amount = display1.value;

    //executa a conversao usando o endopoint 'convert'
    $.ajax({
        url: 'http://data.fixer.io/api/' + endpoint + '?acess_key=' + acess_key + '&from=' + from + '&to=' + to + '&amount=' + amount,
        dataType: 'jsonp' ,
        success:function(json) {
            display2.value = json.result;
        }
    });    

}

function converteDolarReal() {
    let display2 = pegarElemento(".display");
    
    // seta o endpoint e a chave da API
    endpoint = 'convert';
    acess_key = '19c1d9621048a16b7184f648cd3307ba';

    //define a moeda inicial, a moeda alvo e o valor
    from = 'USD';
    to = 'BRL';
    amount = display2.value;

    //executa a conversao usando o endopoint 'convert'
    $.ajax({
        url: 'http://data.fixer.io/api/' + endpoint + '?acess_key=' + acess_key + '&from=' + from + '&to=' + to + '&amount=' + amount,
        dataType: 'jsonp' ,
        success:function(json) {
           display2.value = json.result;
        }
    });
    
}
});