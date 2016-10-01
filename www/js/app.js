var App = {
    
    BASE_URL : 'http://tmebr.esy.es/apis/cardapio/',

    init : function(){

        //exibe o cardapio humburger incialmente
        App.getCardapio('humburgers');

        //No evento onclick de alguma opção 
        $('.opcoes').click(function(){

            $('#label-humburger').removeClass('selecionado');//remove todas as classes 
            $('#label-coffe').removeClass('selecionado');//remove todas as classes

            if($(this).attr('id') === 'humburgers'){//exibe o menu humburgers e marca como selecionado
                $('#label-humburger').addClass('selecionado');
                App.getCardapio('humburgers');
            }else{//exibe o menu coffe e marca como selecionado
                $('#label-coffe').addClass('selecionado');
                App.getCardapio('coffes');
            }
        });
    },

    getCardapio : function (categoria){
        $.ajax({
            url: App.BASE_URL + categoria,
            error: function (erro) {
               console.log('Erro ao acessar a lista:' + categoria + ' - ' + erro);
            },
            success: function (dados) {
                App.construirCardapio(dados);
            }
        });
    },

    construirCardapio : function(dados){

        if(dados && dados.length > 0){
            $( ".cardapio" ).empty();
            var opcoes = JSON.parse(dados);
            for(var i = 0; i < opcoes.length; i++){
                $( ".cardapio" ).append(
                    "<li class='items'>" +  
                        "<span class='items-nome'>" + opcoes[i].nome + "</span>" +
                        "<span class='items-descricao'>" + opcoes[i].descricao + "</span>" +
                        "<span class='items-preco'>" + "R$" + opcoes[i].preco + "<span>" + 
                    "</li>"
                );
            }
        }
    }

}