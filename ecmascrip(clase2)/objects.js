let objeto = [
    {
    manzana: 32,
    bananas: 43,
    frutillas:105,
    sandias:20
    },
    {
    cebolla:100,
    zanaorias:30,
    tomates:78,
    zapallitos:33
    },
    {
    oregano:120,
    tomillo:21,
    provenzal:40,
    canela:40
    }
]
let obtenerClave=Object.keys(objeto);
console.log(obtenerClave); //cuenta y enumera la cantidad de array que hay

let obtenerValor=Object.entries(objeto);
console.log(obtenerValor);// enumera y coloca el contenido de c/u

let obtenerSoloValores= Object.values(objeto);
console.log(obtenerSoloValores);// solo pone el contenido (los valores de cada array)

let valorTotal= obtenerSoloValores.reduce((validarInicio,validar)=>validarInicio+validar)
console.log(valorTotal);

