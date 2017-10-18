var TodoController = {

    init: function (){
        //Register events via framework7
        $$(document).on("click", "#btnAddTodo", TodoController.goToAdd);
        $$(document).on("click", "#save", TodoController.save);
        $$(document).on("click", "#cancel", TodoController.cancel);

        //load main view
       TodoController.backToMainView();
    },

    goToAdd: function () {
        //Framework7 carregando a página addTodo
        mainView.router.loadPage("addTodo.html");
    },

    save: function(){
        var titulo = $$("#titulo").val();
        var data = $$("#data").val();
        var id = $$("#edit").val();

        if (!id) {
            TodoService.add(titulo, data, false);
        } else {
            var todo = new Todo(titulo, data, false);
            todo.id = id;
            TodoService.edit(todo);
        }
        
        //refresh todo list
        TodoController.backToMainView();
    },

    cancel: function(){
        TodoController.backToMainView();
    },

    backToMainView: function(){
        //back to view
        /** 
         * Forçando a volta para view principal
         * carregando e ignorando o cache default do Framework7
        */
         mainView.router.back({
            url: "index.html",
            reload: true,
            ignoreCache: true
        });
    },

    /**
     * Retorna uma instancia da virtual list do Framework7.
     * Basicamente é o template padrão de nossa lista de dados
     * http://framework7.io/docs/virtual-list.html
     */
    buildList: function(){
        return myApp.virtualList('.list-block.virtual-list', {
            cache: false,
            items: new Array(),
            // Template 7 template irá renderizar os itens
            template: '<li>' +
                        '<a href="addTodo.html?id={{id}}&titulo={{titulo}}&data={{data}}" class="item-link">'+
                          '<div class="item-content">' + 
                                '<div class="item-inner">' +
                                    '<div class="item-title">{{titulo}}</div>' +
                                    '<div class="item-after">{{data}}</div>' +
                                '</div>' +
                           '</div>' +
                        '</a>' +
                       '</li>'
        });
    }
}