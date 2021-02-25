//Accordion(Apresentação)
function abrir_Apresentacao(){
    var animacao = document.getElementsByClassName("animation_Apresentacao")
    var ocultox = document.getElementsByClassName("oculto")
    var botaoApresentacao = document.getElementsByClassName("accordion")

    if(ocultox[0].style.display == "block"){  
        botaoApresentacao[0].style.transform = "rotateX(360deg)"
        botaoApresentacao[0].style.borderRadius = "0px 0px 0px 10px"
        animacao[0].style.animation = "0.35s fechando ease-in-out"
        setTimeout(function(){
            ocultox[0].style.display = "none"
        }, 340)
    }else{
        botaoApresentacao[0].style.transform = "rotateX(180deg)"
        botaoApresentacao[0].style.borderRadius = "0px 0px 0px 10px"
        animacao[0].style.animation = "0.35s abrindo ease-in-out"
        ocultox[0].style.display = "block"
    }
}


//Hora do Dia e Imagem/Baixar Código
function faltando(){
    alert("Faltam dados!")
}

function DoDia(){
    var txthora = document.getElementById("horario")
    var txtbomdia = document.getElementById("bomdia")
    var txtimgDoDia = document.getElementById("imgDoDia")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    txtbotaoBomDia = document.getElementById("baixarCodigo")

    txthora.innerHTML = `${hora} horas e ${minutos} minutos`

    if(hora <= 3){
        txtimgDoDia.setAttribute("src", "./horadodia/noite.png")
        txtbomdia.innerHTML = "Tenha uma Boa Madrugada!"
    }else if(hora < 12){
        txtimgDoDia.setAttribute("src", "./horadodia/manha.png")
        txtbomdia.innerHTML = "Tenha um Bom Dia!"
    }else if(hora <= 15){
        txtimgDoDia.setAttribute("src", "./horadodia/tarde.png")
        txtbomdia.innerHTML = "Tenha uma Boa Tarde!"
    }else if(hora < 18){  
        txtimgDoDia.setAttribute("src", "./horadodia/tarde2.png")
        txtbomdia.innerHTML = "Tenha uma Boa Tarde!"
        txtimgDoDia.style.height = "150px"
        txtbotaoBomDia.style.bottom = "236px"
    }else{
        txtimgDoDia.setAttribute("src", "./horadodia/noitetarde.png")
        txtbomdia.innerHTML = "Tenha uma Boa Noite!"
        txtimgDoDia.style.height = "160px"
        txtbotaoBomDia.style.bottom = "246px"
    }
}

// Início de Verdade(Função da primeira interação)
function f1(){
    var nome = document.getElementById("nomet1").value
    var idade = document.getElementById("idadet1").value
    var resultado = document.getElementById("res")
    var checkSex0 = document.getElementById("masc")
    var checkSex1 = document.getElementById("femi")
    var local_img = document.getElementById("nomeIdade_img")
    local_img.innerHTML = ""
    var genero = ""


    if(checkSex0.checked){
        genero = "homem"
    }else if(checkSex1.checked){
        genero = "mulher"
    }else{
        genero = ""
    }
    

    if(nome.length == 0 || idade.length == 0 || genero == ""){
        faltando()
    }else{
        var img = document.createElement("img")
        img.setAttribute("id", "imgNomeIdade")


        if(genero == "homem"){
            if(idade < 4){
                img.setAttribute("src", "./homem_mulher/recemNascido.png")
            }else if(idade < 12){
                img.setAttribute("src", "./homem_mulher/menino.png")
            }else if(idade < 20){
                img.setAttribute("src", "./homem_mulher/garoto.png")
            }else if(idade < 50){
                img.setAttribute("src", "./homem_mulher/homem.png")
            }else if(idade < 100){
                img.setAttribute("src", "./homem_mulher/idosoH.png")
            }else{
                img.setAttribute("src", "./homem_mulher/difunto.png")
            }
        }else{
            if(idade < 4){
                img.setAttribute("src", "./homem_mulher/recemNascido.png")
            }else if(idade < 12){
                img.setAttribute("src", "./homem_mulher/menina.png")
            }else if(idade < 20){
                img.setAttribute("src", "./homem_mulher/garota.png")
            }else if(idade < 50){
                img.setAttribute("src", "./homem_mulher/mulher.png")
            }else if(idade < 100){
                img.setAttribute("src", "./homem_mulher/idosaM.png")                            
            }else{
                img.setAttribute("src", "./homem_mulher/difunto.png")
            }
        }

        resultado.innerHTML = `Seu nome é ${nome}, você é ${genero} e possui ${idade} anos. <br>` + ` Seja Bem Vindo!`
        local_img.appendChild(img)
    }

    
}


//Função da segunda interação(Operadores)
function f2(){
    var txtn1 = document.getElementById("f2num1").value
    var txtn2 = document.getElementById("f2num2").value
    var txtsinal = document.getElementById("f2sinal").value
    var resultado = document.getElementById("f2res")

    function pegaroperacao(sinal = ""){
        if(sinal == "+"){
            return "soma"
        }else if(sinal == "-"){
            return "subtração"
        }else if(sinal == "*" || sinal == "x"){
            return "multiplicação"
        }else if(sinal == "/"){
            return "divisão"
        }else if(sinal == "%"){
            return "resto"
        }else{
            return "operação"
        }
    }

    function pegarsinal(n1 = 0, n2 = 0){
        if(txtsinal == "+"){
            return n1 + n2
        }else if(txtsinal == "-"){
            return n1 - n2
        }else if(txtsinal == "*" || txtsinal == "x"){
            return n1 * n2
        }else if(txtsinal == "/"){
            return (n1 / n2).toFixed(2)
        }else if(txtsinal == "%"){
            return n1 % n2
        }else{
            alert("Operador Aritmético Inválido")
            return n1 + txtsinal + n2
        }
    }

    if(txtn1.length == 0 || txtn2.length == 0 || txtsinal.length == 0){
        faltando()
    }else{
        txtn1 = Number(txtn1)
        txtn2 = Number(txtn2)

        if(pegaroperacao(txtsinal) == "resto"){
            resultado.innerHTML = `O resultado do resto da divisão é entre os dois valores é: ` + pegarsinal(txtn1, txtn2)
        }else{
            resultado.innerHTML = `O resultado da ` + pegaroperacao(txtsinal) + ` entre os dois valores é: ` + pegarsinal(txtn1, txtn2)
        }
    }
}


//Função 3(Tabuada)
function f3(){
    var n1 = document.getElementById("f3_n1").value
    var casas = document.getElementById("f3_vezesMulti").value
    var tab = document.getElementById("sel_tab")
    var res = document.getElementById("f3res")


    if(n1.length == 0 || casas.length == 0){
        faltando()
    }else{
        tab.style.display = "unset"
        res.innerHTML = ""
        tab.innerHTML = ""
        for(var c = 1; c <= casas; c++){
            var a = document.createElement("option")
            a.text = `${n1} x ${c} = ${n1*c}` 
            tab.appendChild(a)
        }
    }
}


//Função 4(Fatorial)
function f4(){
    var n1 = document.getElementById("num_Fatorial").value
    var res = document.getElementById("f4_res")

    function pegar_fatorial(n){
        var fat = 1
        for(var c = n; c > 1; c--){
            fat *= c
        }

        return fat
    }

    if(n1.length == 0){
        faltando()
    }else if(n1 > 100){
        alert("O valor do fatorial é muito alto!")
    }else{
        var numero = n1
        var texto = ""
        
        for(var i = 0; i < numero; i++){
            if(numero-i == "1"){
                texto += (numero-i) + " = "
            }else{
                texto += (numero-i) + " x "
            }
        }

        console.log(pegar_fatorial(n1))
        res.innerHTML = `O fatorial de ${n1} é: <br>` + texto + pegar_fatorial(n1)
    }
    
}


//Função 5(Animais)
function f5(){
    var imagens = document.getElementsByClassName("animais")

    for(var c = 0; c < imagens.length; c++){

        imagens[c].onclick = function(){
            if(this.classList.contains("aumentada")){
                this.classList.remove("aumentada")
            }else{
                this.classList.add("aumentada")
            }
            
        }

    }

}