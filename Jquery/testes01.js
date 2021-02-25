$(document).ready(function(){
    // $("p").on("click", function(){
    //      $(this).css({"color": "darkgreen"})    
    // })
    // $("p").on("mouseover", function(){
    //     $(this).css({"color": "red"})
    // })


    //1

    //toggleClass + animate
    $("#btnFuncoes").click(function(){
        $("#btnFuncoes").toggleClass("giro")


        if($("#outraDiv").css("display") == "none"){
            $("#outraDiv").animate({width: "143px"})
            $("#outraDiv").show()
        }else{
            $("#outraDiv").animate({width: "0px"})
            setTimeout(function(){
                $("#outraDiv").hide()
            }, 300)
        }
    })


    
    //2
    $("#btn1").click(function(){
        //toggleClass
        //$("p:contains('dolori')").toggleClass("sumido")



        //fadeIn e fadeOut + addClass e removeClass
        // if($("p:contains('dolori')").hasClass("sumido")){
        //     $("p:contains('dolori')").removeClass("sumido")
        //     $("p:contains('dolori')").fadeOut()

        //     $("#btn2").click(function(){
        //         var t2 = $("#textoSumido1").html()
        //         $("#textoSumido2").html(t2)
        //     })
        // }else{
        //     $("p:contains('dolori')").addClass("sumido")
        //     $("p:contains('dolori')").fadeIn()
        // }

        //toggle
        $("p:contains('dolori')").toggle(1000)

        $("#btn2").click(function(){
            $("#textoSumido1").html($("#textoSumido2").html())
        })
    })



    //3
    $(".animais").on("click", function(){

        if($(this).css("width") == "300px"){
            $(".animais").show()
            $(this).animate({
                width: "150px",
                height: "100px"
            })
        }else{
            $(".animais").hide()
            var txtAnimal = $(this).attr("alt")
            $(this).animate({
                width: "300px",
                height: "200px" 
            })
        }

        $(this).show()

    })
    
    //4
    $("#criarPar").on("click", function(){
        var p = $("#parCriado").val() + "<br>"
        $("#armazemParagrafos").append(p).toggle(function(){
            $(this).slideDown()
        })
        $("#parCriado").val("")
    })
})