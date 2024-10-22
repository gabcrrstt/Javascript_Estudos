
class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

class ContaCorrente{
    agencia;
    saldo;
    sacar(valor){
    if(this.saldo >= valor){
        this.saldo -= valor;
        }
    }
}


new Cliente();

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


console.log(cliente1);
console.log(cliente2);



