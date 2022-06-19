import { Carro } from "./classes/Carro"
import { Logistica } from "./classes/Logistica"
import { Navio } from "./classes/Navio"

const initialSistem = () => {
const navio: Logistica = new Navio()
const carro: Logistica = new Carro()

function validarFrete(number: number): void{
  navio.validarFretePeso(number)
  carro.validarFretePeso(number)
 }
 function validarFreteRegiao(uf: string): void{
  navio.validarFreteRegiao(uf)
  carro.validarFreteRegiao(uf)
 }

 return {
  validarFrete,
  validarFreteRegiao
 }
}
export default initialSistem