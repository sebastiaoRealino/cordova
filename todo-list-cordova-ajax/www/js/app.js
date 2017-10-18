// Inicializacao
var myApp = new Framework7({
    material: true, //quando material:true nao suporta back link com navegacao dinamica
    template7Pages: true
});

// Exportando os seletores
var $$ = Dom7;

// Adicionando uma view principal
var mainView = myApp.addView('.view-main', {
    // Configurado para o modo de navegação dinâmico
    dynamicNavbar: true
});

//evento especifico do cordova
$$(document).on('deviceready', function() {
    TodoController.init();
});

//Na inicializacao da pagina
$$(document).on("page:init", function(e){//O page:init é um evento genérico que é invocado quando uma página é inicializada
    var page = e.detail.page;
    /** 
     * No arquivo index.html temos uma page chamada chamada "index"
     * <div data-page="index" class="page">
     * Neste caso em particular iremos realizar a chamada ajax e montar a lista sempre
     * que essa página for inicializada
     * http://framework7.io/docs/pages.html
    */
    if (page.name === 'index') {
       var todoList = null;
       var promise = TodoService.getAll();//retorno do promise
       promise.done(function(data){//callback 1 - recebe os dados do servidor e invoca o método para parsear os dados
            todoList = TodoService.parseDataToObject(data);  
       })
       .done(function(data){// callback 2 - Será executada após a callback 1 e basicamenete irá montar a lista com os dados do servidor
            var list = TodoController.buildList(); // retorna a instancia da virtual list do Framework7
            //o atributo items é o conteúdo da lista, neste caso está sendo atualizado com a lista vinda do servidor    
            list.items = todoList;
            // o metodo update() é um método disponível no componente virtual list do framework7 ele irá fazer o update da lista
            list.update();
        })
        .fail(function(err){// callback de falha
            myApp.alert('Erro ao carregar os dados', err.status);
        });
    }
});