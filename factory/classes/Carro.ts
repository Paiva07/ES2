import { Logistica } from "./Logistica";

export class Carro implements Logistica{
  public validarFretePeso(number: number): void {
    if(number < 10){
      console.log('Modalidade Carro: Frete Aceito')
     }else{
       console.log('Modalidade Carro: Frete Negado')
     }
  }
  public validarFreteRegiao(uf: string): void {
    if(uf.toUpperCase() == 'RJ' || uf.toUpperCase() == 'TO'){
     console.log('Modalidade Carro: Região Atendida')
    }else{
     console.log('Modalidade Carro: Região Não Atendida')
    }
  }

}
