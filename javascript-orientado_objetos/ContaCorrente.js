import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0;  // # é estático  por exemplo "numeroDeContas"
    _cliente;
    agencia;
    _saldo = 0;    // # é privado  por exemplo "#_saldo"
    
    set Cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }
    
    get Cliente(){
        return this._cliente;
    }
    
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

    constructor(cliente, agencia){
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.numeroDeContas++;
    }
}