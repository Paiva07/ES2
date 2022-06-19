import prompt from 'prompt-sync';
import { Carro } from "./Carro";
import { Navio } from "./Navio";

const navio: Navio = new Navio()
const carro: Carro = new Carro()
let teclado = prompt();
let option: number = 0; 
let option2

while (option != 9){
  console.log()
    console.log("############ Simulador de Fretes ###########")
    console.log("|1. Simular por Peso                       |")
    console.log("|2. Simular por Estado                     |")
    console.log("|9. Sair                                   |")
    console.log("###########################################")
    console.log()

    option = +teclado("Escolha a forma de simulação: ")

    switch (option) {
      case 1: 
      option2 = +teclado("Informe o Peso: ")
      navio.validarFretePeso(option2)
      carro.validarFretePeso(option2)
      break;
      
      case 2: 
      option2 = teclado("Informe a Sigla do Estado. Ex: RS ")
      navio.validarFreteRegiao(option2)
      carro.validarFreteRegiao(option2)
      break;
    }
}
