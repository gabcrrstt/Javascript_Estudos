/*
        ser autenticavel significa ter o metodo autenticar

        Duck Type (teste do pato):
        se interessa no que o objeto pode fazer;

        Não me interessa se ele é do tipo Cliente,
         do tipo Funcionario, do tipo ContaCorrente,
          me interessa se ele tem o método e a propriedade 
          que eu quero utilizar, se ele tem aquilo, 
          eu vou utilizar independentemente do tipo.
           Por isso nós falamos que é o duck typing, ele passa o teste do pato. 
           Se ele tem a propriedade que eu quero usar, 
           então eu vou usá-lo dessa maneira
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
            return false;
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
         autenticavel.autenticar instanceof Function;
    }
}