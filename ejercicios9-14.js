/*ejercicio 9
Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

const numeroAleatorio = (min = undefined, max = undefined) => {
    if (!min || !max) {
        console.error("Error al ingresar un numero");
    } else {
        let random = Math.floor(Math.random() * (max - min) + min); //Floor para numero entero
        console.log(`El numero aleatorio entre ${min} y ${max} es ${random} `);
    }
}
numeroAleatorio(501, 600);

/*ejercicio 10
Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const capicua = (numero = undefined) => {
    if (!numero) console.error("Error al ingresar el numero")
    else {
        numero = numero.toString()
        numeroVolteado = numero.toString().split("").reverse("").join('');
        console.log(numeroVolteado);
        console.log(numero);
        if (numero === numeroVolteado) console.log(numero === numeroVolteado)
        else
            console.log(numero)
    }
}

capicua(2002);


/*ejercicio 11  
Programa una función que calcule el factorial de un número  (El factorial de un entero positivo n, 
se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const Funfactorial = (numero = undefined) => {
    if (typeof(numero) !== "number") console.error("Tipo de dato no valido");
    else if (numero === 0) console.warn("No puede ser ingresado un 0");
    else if (Math.sign(numero) === -1) console.warn("No puedes ingresar un numero negativo");
    else {
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {

            factorial = factorial * i;
        }
        console.log(`El factorial de ${numero} es ${factorial}`);
    }

}

Funfactorial(0);

/*Ejercicio 12
Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
pe. miFuncion(7) devolverá true. */



/*Ejercicio 13 
Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */



/*Ejercicio 14 
Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C")
 devolverá 32°F. */