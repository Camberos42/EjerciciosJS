/*Ejercicio 1
Programa una función que cuente el número de caracteres de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá 10. */
let texto = "Hola mundo";

function ejercicio1(texto) {
    return texto.length;
}

let longitudPalabra = ejercicio1(texto);
console.log(`Mi codigo: ${longitudPalabra}`);

//Validaciones
function leer(texto) {
    //objeto
    if (texto.name) {
        console.log(`${texto.name.length} Entrada de un objeto`)
    }
    //Array
    else if (typeof texto == "object") {
        console.log(`${texto[1].length} Entrada de un array `)
    }
    //STRING
    else {
        console.log(`${texto.length} Entrada de un string `)
    }

}

leer({ name: "Hola mundo" })
leer(["hola mundo", "hola mundo", "hola mundo", "hola mundo"])
leer("Hola mundo")

/*Ejercicio 2
Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola". */

function palabraRecortada(texto, limite) {
    console.log(texto.substr(0, limite))
}

palabraRecortada("Dodgers son una mierda", 20);

/*Ejercicio 3
Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */

function separarTexto(texto, separador) {
    console.log(`Texto original: ${texto} `);
    console.log(`Separador: ${separador} `)
    const splitText = texto.split(separador)
    console.log(`Texto separado: ${splitText} `);
    //console.log(typeof(texto));
}

//Otra forma
function ArrayTextos(string, caracter) {
    let opcion = (typeof string === 'string') ? true : false;
    let opcion2 = (typeof caracter === 'string') ? true : false;
    let newarray = []
    if (opcion && opcion2) {
        newarray.push(string.split(caracter));
        console.log("el array es el siguiente", newarray);
    } else {
        console.log("no soy string");
    }
}

separarTexto("Me llamo jesus daniel camberos", ' ');
ArrayTextos("Me llamo jesus daniel camberos", ' ');

/*Ejercicio 4 
Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá */

function RepetirTexto(texto, reps) {
    let validartexto = (typeof texto === 'string') ? true : false;
    let validarnumero = (typeof reps === 'number') ? true : false;

    if (validarnumero && validartexto) {
        for (let i = 0; i < reps; i++) {
            console.log(`Texto: ${texto}, numero: ${i+1}`);
        }
    } else {
        console.log("Alguno de los datos ingresados es invalido");
    }
}

RepetirTexto("Go Rays", 4);