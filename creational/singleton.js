/* 
cómo implementar singleton?
  
1. hacer que el constructor sea privado 
2. crear un método estático que llame al privado
    
constructor y guardarlo en una variable estática */


class Singleton {
  static instance = undefined; //Atributo estático para almacenar el valor, llamado para la validación de getInstance() 

  constructor(version) {
      this.version = version;
  }

  static getInstance(version) {
      //Si no existe el atributo instance...
      if (!Singleton.instance) {
          Singleton.instance = new Singleton(version); //...lo crea. 
      }
      return Singleton.instance;
  }

}

function appSingleton() {
  //Todas las variables tienen la misma referencia al mismo objeto. 1 sola instancia a lo largo de la aplicación:
  const singleton1 = Singleton.getInstance('version-1')
  const singleton2 = Singleton.getInstance('version-2')
  const singleton3 = Singleton.getInstance('version-3')

  console.log(singleton1 === singleton2); //true
  console.log(singleton1 === singleton3); //true
}
appSingleton();