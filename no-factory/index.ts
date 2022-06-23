import prompt from 'prompt-sync';
import { Logistica } from "./Logistica";

const carro: Logistica = new Logistica()
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
     
      carro.validarFretePeso(option2)
      break;
      
      case 2: 
      option2 = teclado("Informe a Sigla do Estado. Ex: RS ")
      
      carro.validarFreteRegiao(option2)
      break;
    }
}
