//ejemplo usando map
let valores= [1,2,3,4,5];
let valoresNuevos= valores.map(x=>x+1); // a todos los valores les sumas 1
let valoresMulti= valores.map(x=>x*2); // a todos los valores los multiplica por 2
let valoresComp= valores.map(x=>"a"); // a todos los valores los reemplaza por "a"
console.log(valoresNuevos);
console.log(valoresMulti);
console.log(valoresComp);


//ejemplo de map con funcion

const funCallback =(valor)=>{  // valor es un parametro
    if(valor%2===0){
        return valor
    }else{
        return "no es par"
    }
}

const evaluacion =valores.map(funCallback); //asi se ejecuta una funcion con el map 
console.log(evaluacion); 

