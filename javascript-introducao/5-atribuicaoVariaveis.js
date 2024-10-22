console.log("Trabalhando com atribuicao de variaveis");

let nome = "ricardo";
const sobrenome = "Bugan";

console.log(nome, sobrenome); // virgula usa como "espaco"

console.log("Nome: " + nome);
console.log("Sobrenome: " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`);

//nome = nome + sobrenome;
// se eh const nao pode mudar por ser constante

const nomeCompleto = nome + sobrenome; // mudei pra let na declaracao da variavel
// nome deixou de ser constante

console.log(nomeCompleto)

//Existem variáveis que devem ter um estado inconstante, e
//neste caso usamos o letpara defini-las,
//como por exemplo um contador que varia de números.

//contador eh variavel
let contador = 0;

contador = contador + 1;

let idade;
idade = 29;
idade =idade + 1;
console.log(idade);

