console.log("loops");


console.log("Destinos possiveiss");

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de  Janeiro`,
);

console.log(listaDeDestinos);

const idadeComprador = 20;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

console.log("Cliente pode comprar: " + podeComprar);

let contador =0;
let destinoExiste = false;

while(contador < 3){
    if(listaDeDestinos[contador] == destino){
   //  console.log("Destino existe");
     destinoExiste = true;
     break;
    }
    contador++;
}

console.log("Destino esxiste: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem");
} else{
    console.log("Você não pode embarcar");
}

for(let i =0; i < 3 ; i++) {
    if(listaDeDestinos[i] == destino){
         destinoExiste = true;
    }
}