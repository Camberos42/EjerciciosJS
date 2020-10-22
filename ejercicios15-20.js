/*Ejercicio 15
Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10. */

const convertidor = (numero = undefined, base = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste el numero")
    if (typeof(numero) !== "number") return console.error("El valor del numero ingresado no es un numero")
    if (base === undefined) return console.warn("No ingresaste la base")
    if (typeof(numero) !== "number") return console.error("El valor de la base no es un numero")
    if (base === 2) {
        return console.info(`El numero ${numero} base ${base} = ${parseInt(numero,base)} base 10`)
    } else if (base === 10) {
        return console.info(`El numero ${numero} base ${base} = ${(numero.toString(2))} base 2`)
    }
}

console.log("-----------Ejercicio 15-------------")
convertidor();
convertidor(110, 2);
convertidor(4, 10);

/*Ejercicio 16 
Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800. */

const calcularDescuento = (cantidad = undefined, descuento = undefined) => {
    if (typeof(cantidad) !== "number" || typeof(descuento) !== "number") console.error("Tipo de dato ingresado no valido");
    else if (!cantidad || !descuento) console.warn("No se ingreso ninguna cantidad o descuento");
    else {
        total = cantidad * (1 - (descuento / 100))
        console.log(`El producto cuesta: $${cantidad} y tiene un escuento de ${descuento}%`);
        console.log(`El total a pagar es: $${total}`);
    }
}

console.log("-----------Ejercicio 16-------------")
calcularDescuento(100, 20);


/*Ejercicio 17
Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const calcularAniosPasados = (fecha = undefined) => {
    if (!fecha) console.error("Hubo algun error al cargar la fecha");
    else {
        hoy = new Date();
        anioHoy = hoy.getFullYear();
        anioFecha = fecha.getFullYear();
        console.log(`Han pasado ${anioHoy-anioFecha} años`);
    }
}


console.log("-----------Ejercicio 17-------------")
calcularAniosPasados(new Date(1984, 4, 23))

console.log("------------------------")

//Experimentando con fechas
date = new Date(1984, 4, 23)
console.log(date);
console.log(date.getFullYear())
hoy = new Date();
console.log(hoy);
let dd = String(hoy.getDate());
console.log(dd);

/*Ejercicio 18 
Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */
const contarVocalesConstantes = (texto = undefined) => {
    texto2 = texto.replace(/ /g, "") //Eliminar espacios en blanco
    let vocales = ['a', 'e', 'i', 'o', 'u'],
        contVocales = 0,
        contConstantes = 0;

    for (let i = 0; i < texto2.length; i++) {
        //console.log(texto[i].toLowerCase());
        (vocales.includes(texto2[i])) ? contVocales++ : contConstantes++;
    }
    console.log(`El texto ${texto} contiene: `)
    console.log(`Vocales: ${contVocales} , Constantes: ${contConstantes}`);
}


console.log("-----------Ejercicio 18-------------")
contarVocalesConstantes("Hola Mundo");

//Alternativa con expresiones regulares
const cuentaLetras = (frase = "") => {
    if (!frase) return console.warn("No se ha ingresado una frase para su evaluación");
    if (typeof frase !== "string") return console.error("El valor ingresado no es un string");

    let vocales = 0,
        consonantes = 0,
        cadena = frase.toLowerCase();

    for (let letra of cadena) {
        if (/[aeiouáéíóú]/.test(letra)) vocales++;
        if (/[bcdfghjklmnñpqrstvwxyz]/gi.test(letra)) consonantes++;
    }

    return console.info(`Hay ${vocales} vocales y ${consonantes} consonantes en la frase: ${frase}`)
}

cuentaLetras();
cuentaLetras(true);
cuentaLetras("Hola Mundo")
cuentaLetras("Hey! Estoy bien y tú?");

/*Ejercicio 19
Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
devolverá verdadero. */

//Alternativa con expresiones regulares
const validaNombra = (nombre = "") => {
    if (!nombre) return console.warn("No se ha ingresado un nombre");
    if (typeof nombre !== "string") return console.error("El valor ingresado no es un string");

    return (/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g.test(nombre)) ?
        console.info(`Nombre ingresado válido - ${nombre}: ` + true) :
        console.warn(`Nombre ingresado inválido - ${nombre}: ` + false)
}


console.log("-----------Ejercicio 19-------------")
validaNombra();
validaNombra([]);
validaNombra("Oriana 15");
validaNombra("Oriana &");
validaNombra("Jon Mircha")

/*Ejercicio 20
Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com")
devolverá verdadero. */

const validarCorreo = (correo = undefined) => {
    (correo.indexOf("@") > -1 && correo.indexOf(".com") > -1) ? console.log(`El correo ${correo} es valido`):
        console.error("Correo no valido");
}


console.log("-----------Ejercicio 20-------------")
validarCorreo("jonmircha@gmail.com")

//Alternativa c0n expresiones regulares
const validaEmail = (email = "") => {
    if (!email) return console.warn("No se ha ingresado un email");
    if (typeof email !== "string") return console.error("El valor ingresado no es un string");

    email = email.toLowerCase();

    return (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)) ?
        console.info(`${email} es una dirección de correo válida - ` + true) :
        console.info(`${email} es una dirección de correo inválida - ` + false)
}

validaEmail();
validaEmail(30);
validaEmail("Hola");
validaEmail("codigogatunogmail.com");
validaEmail("codigogatuno@gmailcom");
validaEmail("Ori.Nyan23@gmail.com");
validaEmail("jonmircha@gmail.com");