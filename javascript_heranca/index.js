import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta/Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);

const conta = new Conta(0, cliente1, 1001);
console.log(conta);

//console.log(contaPoupanca);
//console.log(contaCorrenteRicardo);
