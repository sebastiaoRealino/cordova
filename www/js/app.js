var App = {

    init : function(){
        //exibe o cardapio humburger incialmente
        $('#cardapio-humburger').show();
        //No evento onclick de alguma opção 
        $('.opcoes').click(function(){

            $('#label-humburger').removeClass('selecionado');//remove todas as classes 
            $('#label-coffe').removeClass('selecionado');//remove todas as classes

            if($(this).attr('id') === 'humburgers'){//exibe o menu humburgers e marca como selecionado
                $('#label-humburger').addClass('selecionado');
                $('#cardapio-coffe').hide();
                $('#cardapio-humburger').show();
            }else{//exibe o menu coffe e marca como selecionado
                $('#label-coffe').addClass('selecionado');
                $('#cardapio-humburger').hide();
                $('#cardapio-coffe').show();
            }
        });
    }

}