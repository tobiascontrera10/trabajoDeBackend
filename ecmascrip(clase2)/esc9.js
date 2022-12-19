let objeto1 ={
    propiedad1: 2,
    propiedad2:"nombre",
    propiedad3:true
}
let objeto2 ={
    propiedad2:"apellido",
    propiedad3:[2,3,4,5,6]
}

let{propiedad1,propiedad2}=objeto1;
let objeto3={...objeto1,...objeto2}
console.log(objeto3);

//ejemplo 
let objeto4 ={
    A: 1,
    B: 2,
    C: 3
}
let {A,...rest}=objeto4; // se elimina la propiedad A 
console.log(rest)