// Entrega 1.2: Classes & Arrow Functions

// NIVEL 1: EJERCICIO 1
// Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

((n1, n2) => {console.log(n1 + n2)})(5, 7)




// NIVEL 2: EJERCICIO 1
// Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const arrayNumbers = [ 'uno', 'dos', 'tres' ];
const createObject = ( array ) => {
  let obj = {};
  array.forEach( a => { obj[ a ] = a; } );
  return obj;
};

const objectNumbers = createObject(arrayNumbers)
console.log(objectNumbers)




// NIVEL 2: EJERCICIO 2
// Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Person {
  constructor ( name ) {
    this.name = name;
  }

  Name () {
    console.log( this.name );
  }
}

const user = new Person('pedro')
user.Name()




// NIVEL 3: EJERCICIO 1
// Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

class City {
  city = this.city;
  constructor () { if ( new.target === City ) throw new Error( 'This is an error' ); }
  nameCity () { return this.city; }
}

const printCity = (nameCity) => {
  const city = Object.create( City.prototype );
  city.city = nameCity
  console.log(city)
}

printCity('Madrid')
printCity('Barcelona')
printCity('Valencia')
