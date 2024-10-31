export class Conta{

    constructor(saldoInicial, cliente, agencia) {

        if (this.constructor == Conta) {
           throw new Error("vc não deveria instanciar um objeto do tipo Conta Diretamente");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }
    // Metodo Abstrato 
    sacar(valor) {
        throw new Error ("O metodo Sacar da conta eh abstrato");

        let taxa = 1;
        return this._sacar(valor, taxa);
    }
    _sacar (valor,taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}