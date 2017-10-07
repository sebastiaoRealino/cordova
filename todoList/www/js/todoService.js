var TodoService = {

    todos: new Array(),

    getAll: function(){
        return this.todos;
    },

    add: function(titulo, data, pronto) {
        var todo = new Todo(titulo, data, pronto);
        this.todos.push(todo);
    },

    remove: function(titulo){
        for (var i = this.todos.length - 1; i >= 0; i--) {
            var index = this.todos[i].titulo.indexOf(titulo);
            if (index > -1) {
                this.todos.splice(index, 1);
            }
        }
        
    },

    setAsDone: function(titulo){
        for (var i = this.todos.length - 1; i >= 0; i--) {
            var index = this.todos[i].titulo.indexOf(titulo);
            if (index > -1) {
                this.todos[index].pronto = true;
            }
            
        }
    }
}