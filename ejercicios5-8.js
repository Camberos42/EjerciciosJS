/*Ejercicio 5
Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH". */

const invertirPalabra = (texto = undefined) => {
    if (typeof(texto) !== "string") {
        if (texto === undefined) console.warn("Texto esta vacio");
        else console.error("Tipo de dato invalido");

    } else {
        console.log(`Texto original es: ${texto}`);
        let arrayTexto = texto.split('');
        let arrayInvertido = arrayTexto.reverse();
        let textoInvertido = "";
        arrayInvertido.forEach(element => {
            textoInvertido += element;
        });
        console.log(`Texto invertido es: ${textoInvertido}`);
    }
};

invertirPalabra("Hola mundo");

/*Ejercicio 6
Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const palabraRepetida = (texto = undefined, palabra = undefined) => {
    if (typeof(texto) !== "string" || typeof(palabra) !== "string") {
        if (texto === undefined || palabra === undefined) console.warn("Alguno de los parametros esta vacio");
        else console.error("Algun tipo de dato es invalido");

    } else {
        let arrayTexto = texto.split(' ');
        let palabrasRepetidas = []
        arrayTexto.forEach(element => {
            if (element === palabra) palabrasRepetidas.push(element);
        });
        console.log(`Hay un total de ${palabrasRepetidas.length} palabras repetidas.`)
    }
};

palabraRepetida("hola mundo adios mundo te quiero mundo te amo mundo", "mundo");


/*Ejercicio 7
Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const palindrome = (palabra = undefined) => {
    if (typeof(palabra) !== "string") {
        if (palabra === undefined) console.warn("Palabra vacia");
        else console.error("El tipo de dato es invalido");

    } else {
        let arrayTexto = palabra.split('');
        let arrayInvertido = arrayTexto.reverse();
        let palabraInvertida = "";

        arrayInvertido.forEach(element => {
            palabraInvertida += element;
        });

        if (palabra === palabraInvertida) console.log(`La palabra ${palabra} es un palindrome`);
        else console.log(`La palabra ${palabra} no es un palindrome`);
    }
};
palindrome("oso");


/*Ejercicio 8
Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const patron = (texto = undefined, patron = undefined) => {
    if (typeof(texto) !== "string" || typeof(patron) !== "string") {
        if (texto === undefined || patron === undefined) console.warn("Alguno de los parametros esta vacio");
        else console.error("Algun tipo de dato es invalido");

    } else {
        let expReg = new RegExp(patron, "g");
        let nuevo = texto.replace(expReg, "");
        console.log(nuevo);
    }
}
patron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")