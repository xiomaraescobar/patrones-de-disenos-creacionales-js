//Se crea la clase producto con sus atributos y métodos
class Product {
    constructor(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getCost() {
        return this.cost;
    }
}


//Se crea la clase carrito
class ShoppingCart {
    //Se crea su instancia que sea estatica
    static instance = undefined;

    constructor() {
        this.cart = [];
    }

    //Se crean sus diferentes metodos
    getCart() {
        return this.cart;
    }

    add(product) {
        this.cart.push(product);
    }

    deleteById(id) {
        this.cart = this.cart.filter((prod) => prod.getId() !== id);
    }

    //Se crea el metodo que llamara al constructor y retornara la instancia
    static getInstance() {
        if (!ShoppingCart.instance) ShoppingCart.instance = new ShoppingCart();
        return ShoppingCart.instance;
    }
}

function appSingleton() {
    const product1 = new Product(1, "Mouse", 25000)
    const product2 = new Product(2, "Teclado", 50000)
    const product3 = new Product(3, "Tablet", 150000)

    const cart1 = ShoppingCart.getInstance()
    const cart2 = ShoppingCart.getInstance()

    cart1.add(product1)
    cart1.add(product2)
    cart1.add(product3)

    cart1.deleteById(1)

    console.log(cart1.getCart());
    console.log(cart1 === cart2);
}

appSingleton();