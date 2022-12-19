class Contador {
    constructor(nombre){
        this.nombre=nombre;
    }
    static init = 1;

    suma() {Contador.init++
          // suma uno mas al numero de arriba
    console.log(`Quien sumo esto fue ${this.nombre}, dando ${Contador.init}`)} 

}

let resultado = new Contador ("Tobias");

resultado.suma(); // " node ./index.js " para corroborar en la consola"

// ejemplo de INCLUIDES

let jugadores = ['messi','romero','di maria','martinez'];
if (jugadores.includes('messi')){
    console.log("si esta Messi convocado")
}
else{
    console.log(" Messi no esta convocado")
}


let nombre = ['juan', 'pedro','ramiro'];
if(nombre.includes('pedro')){
    console.log("la variable si esta");
}else{
    console.log("el nombre buscado no esta")
;}
