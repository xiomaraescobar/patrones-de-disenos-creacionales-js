/*
¿Cómo implementar el Método de Fábrica?
 *
 * 1. Declarar clase/interfaz de producto base, esto será devuelto por
 * clase de fábrica y sus subclases.
 *
 * Producto base:
 * - Coche base
 *
 * 2. Implementar subclases de productos concretos que hereda/implementa
 * la clase/interfaz del producto base.
 *
 * Productos de hormigón:
 * - MastodonCar
 * - Rinoceronte
 *
 * 3. Declarar clase/interfaz de fábrica base que devuelve objetos que coinciden
 *el producto base, no los de hormigón.
 *
 * Fábrica base:
 * - Fábrica de automóviles
 *
 * 4. Implementar subclases de fábricas concretas que heredan/implementan
 * la clase/interfaz base de fábrica. Estas clases volverán concretas.
 *productos en su método de fábrica.
 *
 * Fábricas de hormigón:
 * - MastodonCarFactory
 * - RhinoCarFactor
 *
 */

// PASO 1

class BaseCar {
    showCost() {
      throw new Error('Method not implemented!');
    }
  }
  
  //PASO 2
  class MastodonCar extends BaseCar {
    /** @override showCost() method */
    showCost() {
      console.log('[MASTODON] Car Cost: 300,000 MXN');
    }
  }
  
  class RhinoCar extends BaseCar {
    /** @override showCost() method */
    showCost() {
      console.log('[RHINO] Car Cost: 100,000 MXN');
    }
  }
  
  // PASO 3
  class CarFactory {
    makeCar() {
      throw new Error('Method not implemented!');
    }
  }
  
  // PASO 4
  class MastodonCarFactory extends CarFactory {
    /**
     * @override makeCar() method
     * @returns MastodonCar
     */
    makeCar() {
      return new MastodonCar();
    }
  }
  
  class RhinoCarFactory extends CarFactory {
    /**
     * @override makeCar() method
     * @returns RhinoCar
     */
    makeCar() {
      return new RhinoCar();
    }
  }
  
  /**
   * Función principal
   * @param {CarFactory} factory Car factory
   */
  function appFactory(factory) {
    console.log('--- [JS] Calling appFactory ---\n');
  
    if (!factory) {
      console.log('--- No factory provided ---');
      return;
    }
  
    const car = factory.makeCar();
    car.showCost();
  }
  
  /**
   * 
     Puedes cambiar la Fábrica como desees ya que
   * todos ellos implementan el mismo comportamiento.
   */
  appFactory(new MastodonCarFactory());
  appFactory(new RhinoCarFactory());
  
  /**
   *
   * @param {string} type type of factory to create
   * @returns {MastodonCarFactory | RhinoCarFactory} 
Una instancia de fábrica de automóviles.
   */
  function createFactory(type) {
    const factories = {
      mastodon: MastodonCarFactory,
      rhino: RhinoCarFactory,
    };
  
    const FactoryClass = factories[type];
    return new FactoryClass();
  }
  
  /**
   * 
En lugar de utilizar el operador new(), abstraemos el
   * creación de fábricas y solo indicamos el tipo
   * como parámetro
   */
  appFactory(createFactory('mastodon'));
  appFactory(createFactory('rhino'));