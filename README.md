# 🛡️ Desafio de Projeto: Escrevendo as Classes de um Jogo

Este repositório contém a resolução do desafio de lógica de programação focado em **Programação Orientada a Objetos (POO)**.

## 📋 O Desafio

O objetivo era criar uma classe genérica que representasse um herói de uma aventura, com as seguintes características:

- **Propriedades:**
  - Nome
  - Idade
  - Tipo (ex: guerreiro, mago, monge, ninja)
- **Método `atacar`:**
  - Deve exibir uma mensagem dependendo do tipo do herói:
    - Mago: "usou magia"
    - Guerreiro: "usou espada"
    - Monge: "usou artes marciais"
    - Ninja: "usou shuriken"

## 🚀 Tecnologias Utilizadas

- **JavaScript**
- Lógica de Programação (Estruturas de decisão e Classes)

## 💻 Exemplo de Código

A estrutura da classe foi implementada da seguinte forma:

```javascript
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}
```
Siga-me no [instagram](https://www.instagram.com/zambianchi.dev/)
