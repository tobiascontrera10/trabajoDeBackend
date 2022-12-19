/*class ProducManager {
    constructor(products,titulo,description,price,thumbnail,code,stock){
        this.products=products,
        this.titulo=titulo, //nombre
        this.description=description, //descripcion
        this.price=price, //precio
        this.thumbnail=thumbnail, //ruta de imagen
        this.code=code, //codigo
        this.stock=stock //cantidad
    }

    static init = 1;
    suma() {ProducManager.init++
        // suma uno mas al numero de arriba
  console.log(`nombre:${this.titulo},descripcion:${this.description}, precio:${this.price}, 
  ruta de imagen:${this.thumbnail}, codigo:${this.code}, cantidad:${this.stock}, contador: ${ProducManager.init}`)} 
}

let objeto1 = new ProducManager ("celular", "iphone 11", "color rojo", 600, ".jpg", 0234, 4);
let objeto2 = new ProducManager ("celular", "iphone 12", "color negro", 1300, ".jpg", 0343, 5);

objeto1.suma();
objeto2.suma();

let obtenerValor=ProducManager.entries(products);
console.log(obtenerValor);*/


class ProducManager {
    constructor(productos){
        this.product = productos;
        this.id = 0;// array vacio
    }
    addProduct( title, description, price, thumbnail, code, stock){
        if (this.products.find( (producto) => producto.code === code) ){
            if (title && description && price && thumbnail && code && stock){
                let producto = { code: code, title: title, description: description, thumbnail: thumbnail, stock: stock, price: price, this:id++,
                this: products.push( producto)}
            }
        
    //getProducts(){
    //    console.log(this.products)
    }

    //getProductById(id){

    }
}