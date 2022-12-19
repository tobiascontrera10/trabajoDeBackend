//funcion asincrona (setTimeout)
function tiempo(){
    console.log("comienza la ejecucion")
    setTimeout(function(){
        console.log("termina la ejecucion")
    },1000); //tardara un segundo en ejecutarse 
}
tiempo()

console.log("otro ejemplo")

//callbacks
function funcionUno(callbackUno){
    console.log("inicio de funcion")
    setTimeout(function(){
        console.log("probando asincronia");
        callbackUno();
    },1000);
}
console.log("ejecutando funcionUno");
funcionUno(function(){
    console.log("mejorando la asincronia")
});
console.log("fin")


