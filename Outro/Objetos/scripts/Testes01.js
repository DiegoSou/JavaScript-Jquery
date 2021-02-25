function Carro(nome, cor, marca, ano) {
    this.nome = nome
    this.cor = cor
    this.marca = marca
    this.ano = ano 
}

Carro.prototype.velocidade = 0
Carro.prototype.acelerar = function(){
    this.velocidade += 5
}

Carro.prototype.parar = function(){
    this.velocidade = 0
}

Carro.prototype.IPVA = function(){
    anotAtual = new Date().getFullYear() - this.ano

    if(anotAtual >= 30){
        console.log("O carro possui isenção de IPVA")
    }else{
        console.log("O carro não possui insenção de IPVA")
    }

}

var fusca = new Carro('Fusca', 'Azul', 'VW', 1978)
console.log(fusca)
console.log(fusca.cor)
console.log(fusca.ano)
fusca.IPVA()