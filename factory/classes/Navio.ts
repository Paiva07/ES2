import { Logistica } from "./Logistica";

export class Navio implements Logistica{
 
 public validarFretePeso(number: number): void {
  if(number > 10){
   console.log('Modalidade Navio: Frete Aceito')
  }else{
    console.log('Modalidade Navio: Frete Negado')
  }
   
 }
 public validarFreteRegiao(uf: string): void {

   if(uf.toUpperCase() == 'RS' || uf.toUpperCase() == 'SP'){
    console.log('Modalidade Navio: Região Atendida')
   }else{
    console.log('Modalidade Navio: Região Não Atendida')
   }
 }
}