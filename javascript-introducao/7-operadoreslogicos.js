console.log("Operadores logicos");


console.log("Destinos possiveiss");

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de  Janeiro`,
);

console.log(listaDeDestinos);

const idadeComprador = 20;
const estaAcompanhada = true;
const temPassagemComprada = true;

//  condicionais

    if(idadeComprador >= 18){
      console.log('Comprador maior de idade');
    } else  if(estaAcompanhada){
        // a pessoa eh menor de idade
            console.log("comprador esta acompanhada");
        }else{
           console.log("nao eh maior de idadee e nao pode venderr");
    }



    // operador OR || funciona como "ou"
    console.log("Operador OR");
    if (idadeComprador >= 18 || estaAcompanhada == true) {
        console.log("Comprador maior de idade");
    } else {
        console.log("Não é maior de idade e não posso vender");
    }


    // operador AND && funciona como "e"
    console.log("Operador AND");
    if (idadeComprador >= 18 && estaAcompanhada) {
        console.log("Boa viagem");
    } else {
        console.log("Você não pode embarcar");
    }

    // operador NOT! inverte a condição
    console.log("Operador NOT!");
    if (!(idadeComprador >= 18 && estaAcompanhada)) {
        console.log("Você não pode embarcar");
    } else {
        console.log("Boa viagem");
    }

    // operador tercnario
    console.log("Operador ternario");
    const boaViagem = idadeComprador >= 18 && estaAcompanhada? "Boa viagem" : "Você não pode embarcar";
    console.log(boaViagem);
    console.log("Embarque:")
    if(idadeComprador >= 18 && temPassagemComprada){
        console.log("Boa viagem");
    }else{
        console.log("Você não pode embarcar");
    }

    console.log(idadeComprador > 18); // maior
    console.log(idadeComprador < 18); //menor
    console.log(idadeComprador == 18); // igual
    console.log(idadeComprador >= 18); //maior igual
    console.log(idadeComprador <= 18); //menor igual

