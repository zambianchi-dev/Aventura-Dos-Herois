class aventuraDosHerois{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let tipoAtaque = ""
        if (this.tipo === "mago"){
            tipoAtaque = "magia"
        } else if (this.tipo === "guerreiro"){
            tipoAtaque = "espada"
        } else if (this.tipo === "monge"){
            tipoAtaque = "artes marciais"
        } else if (this.tipo === "ninja"){
            tipoAtaque = "shuriken"
        }

        console.log(`o ${this.tipo} ${this.nome} com idade de ${this.idade} anos atacou usando ${tipoAtaque}`)
    }
}

let ataqueDoMago = new aventuraDosHerois("Gabriel", 100, "mago")
let ataqueDoGuerreiro = new aventuraDosHerois("Juan", 19, "guerreiro")
let ataqueDoMonge = new aventuraDosHerois("Natanael", 73, "monge")
let ataqueDoNinja = new aventuraDosHerois("Higor", 28, "ninja")

ataqueDoMago.atacar()
ataqueDoGuerreiro.atacar()
ataqueDoMonge.atacar()
ataqueDoNinja.atacar()