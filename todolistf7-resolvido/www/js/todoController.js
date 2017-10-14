var TodoController = {

    init: function (){
        //Register events via framework7
        $$(document).on("click", "#btnAddTodo", TodoController.goToAdd);
        $$(document).on("click", "#save", TodoController.save);
        $$(document).on("click", "#cancel", TodoController.cancel);

        //load todo list
        TodoController.refreshTodoList();
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
        TodoController.refreshTodoList();
    },

    cancel: function(){
        TodoController.refreshTodoList();
    },

    refreshTodoList: function(){
        //back to view
        mainView.router.back();

        var todoList = TodoService.getAll();
        //virtual list framework 7
        myApp.virtualList('.list-block.virtual-list', {
            items: todoList,
            // Template 7 template ira renderizar os itens
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