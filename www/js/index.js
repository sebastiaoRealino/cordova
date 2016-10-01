var Init = {
    // Construtor
    initialize: function() {
        this.bindEvents();
    },

    /**
     * Nossa APP irá começar operar quando o dispositivo estiver pronto.
     * Na inicialização da App existe alguns eventos que são requeridos e de acordo
     * com nossa necessidade pode utiliza-los, os eventos são:
     * load - Na carga da página
     * deviceready - Quando o dispositivo estiver pronto
     * offline - Quando estiver offline
     * online - Quando estiver online
     * 
    */
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    /**
     *  A function onDeviceReady será invocada quando o dispositivo estiver pronto
    */
    onDeviceReady: function() {
        App.init();//chamada para function init App
    }
};

Init.initialize();//chama a inicialização