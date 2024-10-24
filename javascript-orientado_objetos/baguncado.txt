import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente;
const cliente2 = new Cliente;

cliente1.nome = "Ricardo";
cliente1.cpf = 11111111111;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = 'Ana';
cliente2.cpf = 22222222222;
cliente2.agencia = 1002;
cliente2.saldo = 0;


const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;
console.log(contaCorrenteRicardo.saldo);
//simulando um debosito
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);

//simular o saque
contaCorrenteRicardo.saldo = 50;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

contaCorrenteRicardo.depositar(500);





const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
//console.log(conta2);

contaCorrenteRicardo.transferir(200,conta2);

//console.log(contaCorrenteRicardo);
console.log(conta2);
console.log(contaCorrenteRicardo);


//console.log(cliente1);
//console.log(cliente2);


