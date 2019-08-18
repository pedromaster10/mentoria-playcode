/*******************************************************************************
	Tarefa 1:
		Crie uma função chamada termostato. Essa função deve receber um número no
		parâmetro temperatura. Se a temperatura for menor que zero, a função retorna
		a mensagem "Temperatura negativa". Se for maior que zero, retorna a mensagem
		"Temperatura positiva"
*******************************************************************************/
function termostato(temperatura) {
	let resposta;
	if (temperatura < 0) {
		resposta = "Temperatura negativa";
		return resposta;
	} else {
		resposta = "Temperatura positiva";
		return resposta;
	}
}






/*******************************************************************************
	Tarefa 2:
		Crie uma função chamada boletimEscolar. Essa função deve receber um número
		no parâmetro nota. As notas válidas são de 0 a 10. Se o usuário digitar uma
		nota inválida a função deve retornar "Nota inválida". Depois de receber uma
		nota válida, a função deve retornar "Aprovado" ou "Reprovado". A média para
		aprovação é 60%.
*******************************************************************************/
function boletimEscolar(nota) {
	let msg;
	if (nota < 0 || nota > 10) {
		msg = "Nota inválida";
		return msg;
	} else {
		if ( nota >= 6) {
			msg = "Aprovado";
			return msg;
		} else {
			msg = "Reprovado";
			return msg;
		}
	}

}






/*******************************************************************************
	Tarefa 3:
		Crie uma função chamada calcularFrete que recebe a sigla do estado como
		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo
		com a seguinte tabela de preços:
		- MG     -> 12,50
		- SP     -> 23,90
		- RJ     -> 18,20
		- Outros -> 35,90
*******************************************************************************/
function calcularFrete(estado) {
	let preço;
	if (estado == "MG") {
		preço = 12.50;
		return preço;	
	} else if (estado == "SP") {
		preço = 23.90;
		return preço;
	} else if (estado == "RJ") {
		preço = 18.20;
		return preço;
	} else {
		preço = 35.90;
		return preço;
	}
}






/*******************************************************************************
	Tarefa 4:
		Crie uma função com o nome calcularAltura. Essa função deve receber um
		parâmetro altura e retornar uma mensagem de acordo com a tabela:
		- menos que 1,60 -> "baixinho"
		- de 1,60 a 1,85 -> "altura normal"
		- mais de um 1,85 -> "joga basquete?"
*******************************************************************************/
function calcularAltura (altura) {
	let resposta;
	if (altura < 1.60) {
		resposta = "baixinho";
		return resposta;
	} else if (altura >= 1.60 && altura <= 1.85) {
		resposta = "altura normal";
		return resposta;
	} else {
		resposta = "joga basquete?";
		return resposta;
	}
}






/*******************************************************************************
	Tarefa 5:
		Crie uma função chamada validarSenha. Se a senha for "123456", a função
		retorna a mensagem "Login efetuado com sucesso", senão, retorna a mensagem
		"Senha inválida".
*******************************************************************************/
function validarSenha(senha) {
	let msg;
	switch(senha) {
		case "123456":
			msg = "Login efetuado com sucesso";
			return msg;
		default:
			msg = "Senha inválida";
			return msg;
	}
}