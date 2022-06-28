<h1 align="center"> Factory Method </h1>

Introdução

O presente repositório, tem como propósito apresentar o método fábrica, um padrão de projeto, onde uma "superclasse" especifica
os padrões e comportamentos a serem utilizados de forma genérica, podendo posteriormente, ser "sobrescrito" em subclasses.

#descrição-do-projeto

No diretório "no-factory", temos um código desenvolvido em TypeScript, onde temos a classe logística, onde possuímos duas funções (validarFretePeso e validarFreteRegiao), posteriormente, na index.ts a mesma é importada, é efetuado uma chamada direta a classe e um construtor é criado instânciando um "novo operador". 

const carro: Logistica - new Logistica()

Já no diretório "factory", aplicando o método fábrica, temos o core.ts, onde as classes (Carro.ts e Navio.ts), efetuam tais chamadas no core.ts (fabrica).