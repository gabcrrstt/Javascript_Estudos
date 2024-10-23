export class ContaCorrente{
    cliente;
    agencia;
    _saldo = 0;    // # é privado  por exemplo "#_saldo"

    sacar(valor){
    if(this.saldo >= valor){
        this.saldo -= valor;
        return valor;
        }
    }
    depositar(valor){
        if(valor <= 0){ // vertifica se n ta negativo
            return; // so deposita se for positivo o valor
        }
            this.saldo += valor;
            console.log(this.saldo);   //exibir o saldo
        }
        transferir(valor, conta){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
    }
