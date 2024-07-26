// Clase HttpAdapter representa un adaptador HTTP
class HttpAdapter {
    // Constructor que recibe un tipo de adaptador y lo asigna a la propiedad 'type'
    constructor(type) {
        this.type = type;
    }

    //  GET imprime  mensaje indicando que se está realizando una solicitud GET
    get() {
        console.log(`${this.type} Adapter: Performing GET request`);
    }

    // POST imprime mensaje indicando que se está realizando una solicitud POST
    post() {
        console.log(`${this.type} Adapter: Performing POST request`);
    }

    // Método PUT  imprime mensaje indicando que se está realizando una solicitud PUT
    put() {
        console.log(`${this.type} Adapter: Performing PUT request`);
    }

    //DELETE  imprime mensaje indicando que se está realizando una solicitud DELETE
    delete() {
        console.log(`${this.type} Adapter: Performing DELETE request`);
    }
}

// Clase HttpAdapterFactory actúa como una fábrica para crear instancias de HttpAdapter
class HttpAdapterFactory {
    // Método que crea una nueva instancia de HttpAdapter basada en el tipo proporcionado
    makeAdapter(type) {
        return new HttpAdapter(type);
    }
}

// Clase ClientApp que utiliza la fábrica para obtener un adaptador y realizar solicitudes HTTP
class ClientApp {
    // Constructor que recibe un tipo de adaptador, crea una instancia de HttpAdapterFactory
    // y utiliza la fábrica para crear un adaptador del tipo especificado
    constructor(adapterType) {
        this.adapterFactory = new HttpAdapterFactory();
        this.adapter = this.adapterFactory.makeAdapter(adapterType);
    }

    // Método que utiliza el adaptador para realizar solicitudes HTTP (GET, POST, PUT, DELETE)
    performRequests() {
        this.adapter.get();
        this.adapter.post();
        this.adapter.put();
        this.adapter.delete();
    }
}

// Ejemplo de uso:
// Se crea una instancia de ClientApp con el tipo de adaptador 'Custom'
const app = new ClientApp('Custom');
// Se llama al método performRequests para realizar las solicitudes HTTP
app.performRequests();
