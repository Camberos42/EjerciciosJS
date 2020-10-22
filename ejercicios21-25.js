 /*Ejercicio 21 Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

 const ElevaCuadrado = (array = undefined) => {
     if (array instanceof Array) {
         if (array.length === 0) return console.warn("Se ingreso un arreglo vacio");
         cuadrados = []
         array.forEach(element => {
             cuadrado = element * element;
             cuadrados.push(cuadrado);
         });
         console.info(`Arreglo original: ${array}`);
         console.log(array)
         console.info(`Arreglo cuadrados: ${cuadrados}`);
         console.log(cuadrados)
     } else {
         return console.warn("No se ingreso un arreglo");
     }
 }

 console.log('-------Ejercicio21-------')
 ElevaCuadrado("hi");
 ElevaCuadrado();
 ElevaCuadrado([]);
 ElevaCuadrado([1, 2, 3]);


 /*Ejercicio 22 
 Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
 pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

 const numMasAlto = (array = undefined) => {
     if (array instanceof Array) {
         if (array.length === 0) return console.warn("Se ingreso un arreglo vacio");
         console.log(`Arreglo original: ${array} `);
         array.sort();
         masChico = array[0];
         masGrande = array[array.length - 1];
         console.log(`Numero mas chico: ${masChico}, Numero mas grande: ${masGrande}`);
     } else {
         return console.warn("No se ingreso un arreglo");
     }
 }

 console.log('-------Ejercicio22-------')
 numMasAlto("hi");
 numMasAlto([]);
 numMasAlto([3, 2, 1, 6, -3]);


 /*Ejercicio 23
 Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números
 pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

 const dividirParesNones = (array = undefined) => {
     if (array instanceof Array) {
         if (array.length === 0) return console.warn("Se ingreso un arreglo vacio");
         const numeros = {
             pares: [],
             impares: []
         }
         for (let i = 0; i < array.length; i++) {
             (array[i] % 2 == 0) ? numeros.pares.push(array[i]):
                 numeros.impares.push(array[i]);
         }
         console.info(numeros);
     } else {
         return console.warn("No se ingreso un arreglo");
     }
 }

 console.log('-------Ejercicio23-------')
 dividirParesNones("hi");
 dividirParesNones([]);
 dividirParesNones([3, 2, 1, 6, 11, 8]);

 /*Ejercicio 24 
 Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros 
 ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

 const OrdenamientoAscYDesc = (array = undefined) => {
     if (array instanceof Array) {
         if (array.length === 0) return console.warn("Se ingreso un arreglo vacio");
         const numeros = {
             ascendente: [],
             descendente: []
         }

         numeros.ascendente = array.map((element) => element).sort((a, b) => a - b)
         numeros.descendente = array.map((element) => element).sort((a, b) => b - a)
         console.log(numeros);

     } else {
         return console.warn("No se ingreso un arreglo");
     }
 }


 console.log('-------Ejercicio24-------')
 OrdenamientoAscYDesc("hi");
 OrdenamientoAscYDesc([]);
 OrdenamientoAscYDesc([3, 2, 1, 6, 11, 8]);

 /*Ejercicio 25
 Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */

 const EliminarDuplicados = (array = undefined) => {
     if (array instanceof Array) {
         if (array.length === 0) return console.warn("Se ingreso un arreglo vacio");
         let valoresUnicos = []
         array.forEach(element => {
             if (!valoresUnicos.includes(element)) valoresUnicos.push(element);
         });
         console.log(valoresUnicos);
     } else {
         return console.warn("No se ingreso un arreglo");
     }
 }

 console.log('-------Ejercicio25-------')
 OrdenamientoAscYDesc("hi");
 OrdenamientoAscYDesc([]);
 EliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);