// var nomeModulo = (function(){
//     var variavelPrivada = 10
//     var funcaoPrivada = function(){
//         console.log(variavelPrivada)
//     }
//     return {
//         acessoExterno: funcaoPrivada
//     }
// })();


//Esta função é chamada de IIFE e está oculta do mundo externo, encapsulada. Conseguimos ter acesso apenas ao que retornamos de nosso IIFE
var moduloCarro = (function(){
    //variavel privada
    var velocidade = 0

    //funcao privada
    var girarEngrenagens = function(){
        velocidade += 5
    }

    var aumentarVelocidade = function(){
        girarEngrenagens()
    }

    //retorno interface de acao
    return{
        acelerar: aumentarVelocidade
    } 
})()

moduloCarro.acelerar()