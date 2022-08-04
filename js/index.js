class Receta {
    constructor(nombre, tipo, sabor, tiempo) {
        this.nombre = nombre
        this.tipo = tipo
        this.sabor = sabor
        this.tiempo = tiempo
    }
}


function nuevaReceta() {
    
    nombre = prompt("Ingrese el nombre de la receta")
    tipo = prompt("Ingrese el tipo de la receta", "Ej: comida, bebida, postre, torta, snack")
    sabor = prompt("Ingrese el sabor de la receta", "Ej: dulce, salado, agridulce, amargo")
    tiempo = prompt("Ingrese el tiempo aproximado de elaboración")
    const recetaNueva = new Receta(nombre, tipo, sabor, tiempo)
    console.log(recetaNueva)

    let agregarAhora = true

    agregarAhora = confirm("¿Desea agregar los ingredientes de la receta?")

    if (agregarAhora) {
        agregarIngredientes()
    } 
    console.log("La receta fue agregada exitosamente.")
}

let seguimos = true
let cantIngredientes = 1

function agregarIngredientes() {

    let seguimos = true
    let cantIngredientes = 0


    while(seguimos) {

    ingrediente = prompt("Agregar ingrediente:")
    cantidad = prompt("Cantidad del ingrediente ingresado:")
    
    if (ingrediente == "" || cantidad == "" || ingrediente == null || cantidad == null) {
        console.error("Los campos no pueden quedar vacios!")
    }
    else {
         console.log(ingrediente, ",", cantidad)
         cantIngredientes++
    }

    seguimos = confirm("¿Desea agregar otro ingrediente?")

         if ((seguimos == false) && (cantIngredientes < 3)) {
        console.warn("Debe agregar minimo 3 ingredientes.")
        seguimos = true
        } 

    }
    console.log("Cantidad de ingredientes: ", cantIngredientes)
}

function calcularIMC() {
     peso = parseInt(prompt("Ingrese su peso en kilogramos:"))
     altura = parseInt(prompt("Ingrese su altura en centimetros:"))
     altura = altura / 100
     imc = peso / (altura * altura)
     if (peso == "" || altura == "") {
        console.error("Los campos no pueden quedar vacios!")    
    } else {
         console.log("Su indice de masa corporal es:", imc)
    }

    if (imc >= 18.5 && imc <= 24.9) {
        console.log("Su peso se encuentra normal")
    } else if (imc > 25){
        console.log("Se encuentra por arriba del limite")
    } else if (imc < 18.4){
        console.log("Se encuentra por debajo del limite")
    } else {
        console.warn("Ups, ocurrió un erro en el calculo.")
    }
}
