// Clase Car
class Car {
    constructor() {
        this.airBags = 0;
        this.color = '';
        this.edition = '';
    }
}

// Clase HatchbackProductionLine (Builder)
class HatchbackProductionLine {
    constructor() {
        this.reset();
    }

    // Método para reiniciar el auto en producción
    reset() {
        this.car = new Car();
    }

    // Método para establecer el número de airbags
    setAirBags(number) {
        this.car.airBags = number;
        return this; // Permite encadenar métodos
    }

    // Método para establecer el color del auto
    setColor(color) {
        this.car.color = color;
        return this; // Permite encadenar métodos
    }

    // Método para establecer la edición del auto
    setEdition(edition) {
        this.car.edition = edition;
        return this; // Permite encadenar métodos
    }

    // Método para obtener el auto construido
    build() {
        const builtCar = this.car;
        this.reset(); // Reinicia la construcción para un nuevo auto
        return builtCar;
    }
}

// Clase Director
class Director {
    // Método para construir la edición deportiva del auto
    constructSportEdition(builder) {
        builder.setAirBags(6)
               .setColor('Red')
               .setEdition('Sport');
    }
}


const builder = new HatchbackProductionLine();
const director = new Director();

// Construir la edición deportiva
director.constructSportEdition(builder);
const sportCar = builder.build();

console.log(sportCar); // { airBags: 6, color: 'Red', edition: 'Sport' }

// También se puede construir otro tipo de auto sin el director
const customCar = builder.setAirBags(4)
                         .setColor('Blue')
                         .setEdition('Custom')
                         .build();

console.log(customCar); // { airBags: 4, color: 'Blue', edition: 'Custom' }
