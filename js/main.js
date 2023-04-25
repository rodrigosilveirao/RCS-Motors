$(document).ready(function(){
    $('#carrossel').slick({
        autoplay: true
    })
    

    $('.menuHamburguer').click(function(){
        $("nav").slideToggle()
    })

    $("#telefone").mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome:  {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            carroDeInteresse: {
                required: false,
            },
            obs: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insire seu nome!',
            email: 'Por favor, insire seu email!',
            telefone: 'Por favor, insire seu telefone!',
            obs: 'Por favor, insire sua observacao!'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

    $('#carroDeInteresse').val(nomeVeiculo); 

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})