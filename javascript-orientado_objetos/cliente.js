
export class Cliente{
    nome;
    _cpf;
    // # é privado  por exemplo "#saldo"
    // no entanto, ainda nao esta implementado a classes privadas
    //enquanto a proposta de campos privados não é oficialmente implementada,
    //a convenção é usar o underline (_).


// no typescript existe as classes privadas


    get cpf(){
       return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}




