let expr = "mangos"

switch (expr) {
    case "mangos":
        console.log("los mangos x5 cuestan $1")
        break;
    case "naranjas":
        //codigo
        console.log("los naranjas x10 cuestan $1")
        break;
    case "manzanas":
        console.log(" las manzanas x5 cuestan 1")
    default:
        console.log(`Lo siento no contamos con ${expr}`)
        break;
}
console.log("Quiere comprar algo adicional? ")