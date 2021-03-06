/*******************************************************************************
	
	Tarefa 1:

		Defina uma classe com o nome Motor. Essa classe quando instanciada, receberá
		os parâmetros cilindradas e combustivel através do método construtor.
		Essa classe terá 2 métodos, um chamado ligar e outro chamado desligar, que 
		retorna strings conforme mostrado nos exemplos abaixo:

		new Motor(2000, 'gasolina').ligar() 
		~> "Motor 2000 cilindradas a gasolina está ligado"
		
		new Motor(1000, 'álcool').desligar() 
		~> "Motor 1000 cilindradas a álcool está desligado"

*******************************************************************************/
class Motor {

	constructor (cilindradas, combustivel) {
		this.cilindradas = cilindradas;
		this.combustivel = combustivel;
	}

	ligar() {
		let texto = new String();
		texto = "Motor "+this.cilindradas+" cilindradas a "+this.combustivel+
		" está ligado";
		return texto;
	}

	desligar() {
		let texto = new String();
		texto = "Motor "+this.cilindradas+" cilindradas a "+this.combustivel+
		" está desligado";
		return texto;
	}
}









/*******************************************************************************
 
	Tarefa 2:

		Defina uma classe chamada Calculadora, que recebe 2 números como parâmetro
		no método construtor. Essa classe faz cálculos com esses 2 números através
		de 4 métodos: somar, subtrair, multiplicar, dividir. Exemplo de uso:

		new Calculadora(10, 2).somar()
		~> 12

		new Calculadora(10, 2).subtrair()
		~> 8

		new Calculadora(10, 2).multiplicar()
		~> 20

		new Calculadora(10, 2).dividir()
		~> 5
		
*******************************************************************************/

class Calculadora {
	constructor (num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	}

	somar() {
		return this.num1 + this.num2;
	}

	subtrair() {
		return this.num1 - this.num2;
	}

	multiplicar() {
		return this.num1 * this.num2;
	}

	dividir() {
		return this.num1 / this.num2;
	}
}


/*******************************************************************************
	
	Tarefa 3:

		Defina a classe Calendario. Ela deve ter 2 métodos estáticos. O primeiro
		método chamado nomeDias deve retornar um array com os dias da semana,
		começando com domingo.
9
		Calendario.nomeDias()
		~> ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

		O segundo método estático chamado diaSemana deve receber como parâmetro uma 
		string contendo uma data no formato brasileiro (ex: 31/12/2019) e deve 
		retornar o nome do dia da semana que essa data se refere:

		Calendario.diaSemana('31/12/2019')
		~> "terça-feira"

		O método diaSemana deve obrigatoriamente fazer chamada ao método nomeDias
		que contém uma lista com os nomes dos dias da semana. Para criar esse método
		será necessário também entender como se usa a classe Date disponível nativa-
		mente no Javascript, conforme referência abaixo:

		https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

*******************************************************************************/
class Calendario {

	/* http://clubedosgeeks.com.br/programacao/mudar-formato-de-data-em-javascript */

	static nomeDias() {
		var semana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
		'quinta-feira', 'sexta-feira', 'sabado'];
		return semana;
	}

	static diaSemana (dataString) {
		
		var split = dataString.split('/');
		var novadata = split[2] + "/" +split[1]+"/"+split[0];
		var data = new Date(novadata);

		var semana2 = this.nomeDias();

		if (data.getDay() == 0) {
			return semana2[0];
		} else if (data.getDay() == 1) {
			return semana2[1];
		} else if (data.getDay() == 2) {
			return semana2[2];
		} else if (data.getDay() == 3) {
			return semana2[3];
		} else if (data.getDay() == 4) {
			return semana2[4];
		} else if (data.getDay() == 5) {
			return semana2[5];
		} else {
			return semana2[6];
		}
	}
}



/*******************************************************************************
	
	Tarefa 4:

		Defina a classe CalendarioIngles. Essa classe deve herdar os métodos da
		classe Calendario, criado na tarefa anterior. Agora subscreva apenas o método 
		nomeDias, para que ele retorne uma lista de dias da semana em inglês

		CalendarioIngles.nomeDias()
		~> ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

		Fazendo isso, o o outro método diaSemana, passa a trazer os resultados em 
		inglês mesmo sem você ter alterado ele diretamente. Essa é a grande vantagem 
		de se usar orientação a objetos para reutilização de código:

		Calendario.diaSemana('31/12/2019')
		~> "tuesday"

*******************************************************************************/
class CalendarioIngles extends Calendario {

	static nomeDias() {
		var semana = ['sunday', 'monday', 'tuesday', 'wednesday', 
		'thursday', 'friday', 'saturday'];
		return semana;
	}
}



/******************************************************************************
 
	Tarefa 5:

		Defina a classe Agenda. Ela deve ter uma propriedade chamada contatos 
		inicializada com um array vazio. Deve ter um método chamado adicionaContato 
		que recebe os parâmetros nome, telefone e cria um objeto a ser adicionado na
		propriedade contatos. Essa classe deve ter também o método listaContatos que 
		retorna a lista de contatos armazenada na propriedade contatos.
		
*******************************************************************************/

class Agenda {
	
	constructor() {
		this.contatos = [];
	}

	 adicionaContato(nome, telefone) {
		class Contato {
			constructor(nome, telefone){
			this.nome = nome;
			this.telefone = telefone;
			}
	 	}	
		var contato = new Contato(nome, telefone); 
		this.contatos.push(contato);
	}

	listaContatos() {
		return this.contatos;
	}

}
