// NIVEL 1:  EJERCICIO UNO
// Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

const username = ( nombre ) => {
  console.log( nombre );
};

username( 'pedro' );




// NIVEL 2:  EJERCICIO UNO
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

const fullName = ( nombres, apellidos ) => {
  const name = `Nombre: ${ nombres } Apellidos: ${ apellidos }`;
  return name;
};

const names = fullName( 'pedro', 'suarez' );
console.log( names );




// NIVEL 2:  EJERCICIO DOS
// Invoca una funció que retorni un valor des de dins d'una template literal.

const price = ( val ) => { return `${ val } euros`; };

const description = `El precio de la fruta es ${ price( 1.8 ) }`;
console.log( description );




// NIVEL 3:  EJERCICIO UNO
// Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

const createArray = () => {
  const loop = () => { for ( let i = 0; i < 10; i++ ) { console.log( i ) } };
  const list = [];
  for ( let i = 0; i < 10; i++ ) { list.push( loop ) }
  return list;
};

const arrayOfFunctions = createArray();
arrayOfFunctions.forEach( a => a() );




// NIVEL 3:  EJERCICIO DOS
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

const response = ( function ( username ) { console.log( username ); } )( 'usuario uno' );
