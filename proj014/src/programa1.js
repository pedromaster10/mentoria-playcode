/*******************************************************************************
	Tarefa 1: (USE SWITCH CASE) 
		Crie uma função chamada calcularFrete que recebe a sigla do estado como 
		parâmetro e retorne o valor do frete. O frete deve ser calculado de acordo 
		com a seguinte tabela de preços:
			MG     -> 12,50
			SP     -> 23,90
			RJ     -> 18,20
			Outros -> 35,90
*******************************************************************************/
function calcularFrete(estado) {
	let preco;
	switch(estado) {
		case "MG":
			preco = 12.50;
			return preco;
		case "SP":
			preco = 23.90;
			return preco;
		case "RJ":
			preco = 18.20;
			return preco;
		default:
			preco = 35.90;
			return preco;
	}
}






/*******************************************************************************
	Tarefa 2: (USE SWITCH CASE)
		Crie um função chamada nomeMes, que recebe um número referente ao mês e 
		retorna o nome do mês equivalente. 1 para Janeiro, 2 para Fevereiro, 3 para 
		março e assim por diante, até 12 para dezembro. Deve retornar a mensagem
		"Mês inválido" caso seja usado algum número que não esteja entre 1 e 12.
*******************************************************************************/
function nomeMes (mes) {
	let nome;
	switch(mes) {
		case 1:
			nome = "janeiro";
			return nome;
		case 2:
			nome = "fevereiro";
			return nome;
		case 3:
			nome = "março";
			return nome;
		case 4:
			nome = "abril";
			return nome;
		case 5:
			nome = "maio";
			return nome;
		case 6:
			nome = "junho";
			return nome;
		case 7:
			nome = "julho";
			return nome;
		case 8:
			nome = "agosto";
			return nome;
		case 9:
			nome = "setembro";
			return nome;
		case 10:
			nome = "outubro";
			return nome;
		case 11:
			nome = "novembro";
			return nome;
		case 12:
			nome = "dezembro";
			return nome;			
		default:
			nome = "Mês inválido";
			return nome;
	}
}






/*******************************************************************************
	Tarefa 3: (USE SWITCH CASE) 
		Crie uma função chamada tabelaPeriodica que recebe como parâmetro a sigla
		de um elemento químico e retorne o nome desse elemento. Para exemplificar, 
		passando a sigla Zn, vai retornar zinco e Pt vai retornar platina.
		Use essa referência para abranger todos os elementos:
		https://pt.wikipedia.org/wiki/Tabela_peri%C3%B3dica#Estrutura_da_tabela_peri%C3%B3dica		
*******************************************************************************/
function tabelaPeriodica (sigla) {
	switch (sigla) {
		case "Zn":
			sigla = "zinco";
			return sigla;
		case "Pt":
			sigla = "platina";
			return sigla;
		case "Sn":
			sigla = "estanho";
			return sigla;
		case "Br":
			sigla = "bromo";
			return sigla;
	}
}