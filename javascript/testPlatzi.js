//Test platzi
    //Variables y operaciones:
//Declaraciones
let declaracion; //variable declarada
declaracion = "Soy una variable inicializada";


//Sumas y concatenaciones 
let sumarStrings = "Hola" + " " + "mundo!";
let sumarNumbers = 10 + 2;
let sumarNumbersStrings = "Hola, yo tengo: " + 12
console.log(sumarStrings, sumarNumbers, sumarNumbersStrings);


//Variables y sus tipos de valores
let nombre = "Antonio";
let apellido = "Maldonado";
let userNamePlatzi = "Sebasmalonce";
let edad = 18;
let correo = "antoniosebastianmaldonado@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 300;
let dineroDeudas = 200;

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(mayorDeEdad));

//Variables agrupadas:
const personaObject = {
    nombre: "Antonio",
    apellido: "Maldonado",
    userNamePlatzi: "Sebasmalonce",
    edad: 18,
    correo: "antoniosebastianmaldonado@gmail.com",
    mayorDeEdad: true,
    dineroAhorrado: 300,
    dineroDeudas: 200
};
const personaArray = [
    {
        nombre: "Antonio",
        apellido: "Maldonado",
        userNamePlatzi: "Sebasmalonce",
        edad: 18,
        correo: "antoniosebastianmaldonado@gmail.com",
        mayorDeEdad: true,
        dineroAhorrado: 300,
        dineroDeudas: 200
    }
];


//Calculando y sumando
const sumarNombres = nombre + apellido;
const dineroReal = dineroAhorrado - dineroDeudas;
console.log(`Mi nombre completo es ${sumarNombres}`)
console.log(`El dinero que tengo actualmente en mi banco es: ${dineroReal}`)




    //Funciones
//Convirtiendo variables normales en parámetros y argumentos CON FUNCIONES
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

function print(firstName, secondName, Nickname){
    console.log(`Mi primer nombre es: ${firstName}
    Mi segundo nombre es ${secondName}
    Mi nickname es: ${Nickname}
    Mi nombre completo es: ${firstName + " " + secondName}`)
    }
    
    console.log(print("Antonio", "Sebastian", "Sebas"))




    //Condicionales
//Transformar switch case en if / else:
    const tipoDeSuscripcion = "Basic";

    // switch (tipoDeSuscripcion) {
    // case "Free":
    //     console.log("Solo puedes tomar los cursos gratis");
    //     break;
    // case "Basic":
    //     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    //     break;
    // case "Expert":
    //     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    //     break;
    // case "ExpertPlus":
    //     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    //     break;
    // }
    
    if (tipoDeSuscripcion == "Free") {
        console.log("No permitted")
    } if (tipoDeSuscripcion == "Basic") {
        console.log("Permitted")
    } if (tipoDeSuscripcion == "Premium") {
        console.log("Permitted + more options")
    } else {
        console.log("You don't have none subscription")
    }


//Replicar el if / else, pero en una sola línea
    if (tipoDeSuscripcion == "Free" ? "Permiso" : "No permiso" ||
        tipoDeSuscripcion == "Premium" ? "Permiso" : "No permiso" ||
        tipoDeSuscripcion == "Basic" ? "Permiso" : "No permiso"){
    console.log("Permiso concedido")
    }

    //Con objetos:
        const planElegidoUser = 'free';

        const planesDisponibles = {
        free: "free-plan",
        basic: "basic-plan",
        premium: "premium-plan"
        }
        
        const planDefault = "NO-plan"
        
        
        const plan = planesDisponibles[planElegidoUser] || planDefault
        console.log(plan)




    //Loops / Ciclos
//Cambiar el for por un while
let iCero = 0
while (iCero < 5) {
    iCero++;
    console.log(`El valor de i es: ${i}`);
}

let iDiez = 10;
while (iDiez >= 2) {
    iDiez--;
    console.log(`El valor de i es: ${i}`)
}
//No pude hacerlo solo, tuve que asistirme y comprender el código desde un repositorio de github de un compañero de platzi.}


//Suma de números iguales:
const numA = 10;
const numB = 5;
const sumatoria = numA + numB

const result = function() {
    let inputUser = prompt(`¿Cuanto es ${numA} + ${numB}?`)
    
    if (parseFloat(inputUser) === sumatoria) {
        alert("Genial")
    } else {
        alert("Que mal")
    }
}
    //Con While
        const resultWhile = function() {
            while (true) {
                let inputUser = prompt(`¿Cuánto es ${numA} + ${numB}?`);
                
                if (parseFloat(inputUser) === sumatoria) {
                    alert("Genial");
                } else {
                    alert("Que mal");
                    break; // Se detiene el bucle cuando la respuesta es incorrecta
                }
            }
        };
    //Con números ingresados por el usuario:
        let FirstNumber = prompt("Ingrese el PRIMER número")
        let SecondNumber = prompt("Ingrese el SEGUNDO número")
        let usuarioNumbersElegidos = alert(`${FirstNumber} + ${SecondNumber}`) 

        const resultado = function(){
            alert(parseFloat(FirstNumber) + parseFloat(SecondNumber)); 
        }
        resultado()




    //Listas
//Función que reciba cualquier array e imprima 1er elemento
    const equiposFutbol = ["Universitario", " Alianza Lima", " Cristal", " Deportivo Callao"]
    function lecturaDeArray(saveArray) {
        alert(`El array que estamos leyendo contiene los siguientes equipos de fútbol: ${saveArray}`)
        //Para verificar que devuelve el saveArray:
        return saveArray
    };
    lecturaDeArray(equiposFutbol);
        //Imprima su primer elemento
            function imprimirPrimerElemento(saveArray) {
                alert(`El array que estamos leyendo tiene distintos equipos de fútbol, y este es el primero: ${saveArray[0]}`)
            };
            imprimirPrimerElemento(equiposFutbol);
        //Un poco más complejo, para verificarlo con if y else.
            function verificacionAndLecturaArray(saveArray) {
                if (Array.isArray(saveArray) && saveArray.length > 0) {
                    alert(`El array que estamos leyendo contiene los siguientes equipos de fútbol: ${saveArray}`)
                } else {
                    alert("El array ingresado no contiene valores o es invalido")
                }
            }
            verificacionAndLecturaArray(equiposFutbol)
//Función que imprima elemento por elemento
    const paisesLatinos = ["Perú", "Argentina", "Bolivia", "Chile", "Ecuador", "Colombia", "Venezuela", "Uruguay"]
    function imprimirArrayElemento(saveArray) {
        if (Array.isArray(saveArray) && saveArray.length > 0) {
            console.log("Estos son los países latino americanos:");
            for (let i = 0; i < array.length; i++) {
                console.log(saveArray[i])
            };
        } else {
            alert("El array ingresado no contiene valores o es invalido");
        }
    }
    imprimirArrayElemento(paisesLatinos);
//Recorrer objeto y imprimir sus valores y propiedades uno por uno
    const carroEspecifico = {
        matricula: "A2XPE",
        marca: "Toyota",
        modelo: "Carolla",
        precio: 200000

    };
    function objetoName(saveObjeto) {
        if (typeof saveObjeto === 'object' && saveObjeto !== null) {
            console.log(`El objeto que estamos leyendo contiene lo siguiente:`)
            for (const propiedadValores in saveObjeto) {
                console.log(`${propiedadValores}: ${saveObjeto[propiedadValores]}`)
            }
        } else {
            console.log("El array ingresado no contiene valores o es invalido")
        }
    }
    objetoName(carroEspecifico);