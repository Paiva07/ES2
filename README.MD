<h1 align="center"> Factory Method </h1>

<h2> Introdução </h2>

O presente repositório, tem como propósito apresentar o método fábrica, um padrão de projeto, onde uma Interface especifica
os padrões e comportamentos a serem utilizados de forma genérica, podendo posteriormente, ser "sobrescrito" em subclasses.

<h2> Descrição do projeto </h2>

No diretório "no-factory", temos um código desenvolvido em TypeScript, onde temos a classe logística, onde possuímos dois metodos (validarFretePeso e validarFreteRegiao), posteriormente, na index.ts a mesma é importada, é efetuado uma chamada direta a classe e um construtor é criado instânciando um "novo operador", o operador carro, onde são chamadas todos metodos de forma direta. <i>const carro: Logistica - new Logistica()</i>

Já no diretório "factory", aplicando o método fábrica, temos a interface Logistica que é composta de dois metodos, validarFretePeso e validarFreteRegiao, estes serão de todas as classes derivadas de interface, porém cada uma com a sua lógica dentro do método. Por fim, temos o core.ts, o qual é a nossa fábrica, que instância as nossas classes Carro.ts e Navio.ts, efetuando tais chamadas através do core.ts (fabrica).

Link da apresentação!
https://www.dropbox.com/s/8hr2jbgy7jhekyp/ES2%20-%20Factory%20Method.mp4?dl=0


<img width="200" align="center" src="https://pbs.twimg.com/media/FIzozpiXIAQYdlI.jpg">
<h3 align="center"> Meteu essa? </h3>
