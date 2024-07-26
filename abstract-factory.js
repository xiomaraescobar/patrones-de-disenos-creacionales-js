

// STEP 1
class MastodonCar {
  useGPS() {
    throw new Error('Method not implemented!');
  }
}

class RhinoCar {
  useGPS() {
    throw new Error('Method not implemented!');
  }
}

// STEP 2
class MastodonSedanCar extends MastodonCar {
  /** @override useGPS() method */
  useGPS() {
    console.log('[SEDAN] Mastodon GPS');
  }
}

class MastodonHatchbackCar extends MastodonCar {
  /** @override useGPS() method */
  useGPS() {
    console.log('[HATCHBACK] Mastodon GPS');
  }
}

class RhinoSedanCar extends RhinoCar {
  /** @override useGPS() method */
  useGPS() {
    console.log('[SEDAN] Rhino GPS');
  }
}

class RhinoHatchbackCar extends RhinoCar {
  /** @override useGPS() method */
  useGPS() {
    console.log('[HATCHBACK] Rhino GPS');
  }
}

// STEP 3
class CarAbstractFactory {
  createMastodon() {
    throw new Error('Method not implemented!');
  }

  createRhino() {
    throw new Error('Method not implemented!');
  }
}

// STEP 4
class SedanCarFactory {
  /**
   * @override createMastodon() method
   * @returns MastodonSedanCar
   */
  createMastodon() {
    return new MastodonSedanCar();
  }

  /**
   * @override createRhino() method
   * @returns RhinoSedanCar
   */
  createRhino() {
    return new RhinoSedanCar();
  }
}

class HatchbackCarFactory {
  /**
   * @override createMastodon() method
   * @returns MastodonHatchbackCar
   */
  createMastodon() {
    return new MastodonHatchbackCar();
  }

  /**
   * @override createRhino() method
   * @returns RhinoHatchbackCar
   */
  createRhino() {
    return new RhinoHatchbackCar();
  }
}

/**
 * Main function
 * @param {CarAbstractFactory} factory Car factory
 */
function appAbstractFactory(factory) {
  console.log('--- [JS] Calling appAbstractFactory ---\n');
  if (!factory) {
    console.log('--- No factory provided ---');
    return;
  }

  const mastodon = factory.createMastodon();
  const rhino = factory.createRhino();

  mastodon.useGPS();
  rhino.useGPS();
}

/**
 *
Puedes cambiar la Fábrica como desees ya que
 * todos ellos implementan el mismo comportamiento.
 */
appAbstractFactory(new HatchbackCarFactory());
appAbstractFactory(new SedanCarFactory());

/**
 *
 * @param {string} type type of factory family to create
 * @returns {SedanCarFactory | HatchbackCarFactory} A car factory instance
 */
function createFactory(name) {
  const factories = {
    sedan: SedanCarFactory,
    hatchback: HatchbackCarFactory,
  };

  const Factory = factories[name];
  return new Factory();
}

/**
 * En lugar de utilizar el operador new(), abstraemos el
 * creación de fábricas y solo indicamos el tipo
 * como parámetro
 */
appAbstractFactory(createFactory('hatchback'));
appAbstractFactory(createFactory('sedan'));