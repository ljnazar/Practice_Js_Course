class Producto{
    constructor(info) {
        this.nombre = info.nombre;
        this.precio = info.precio;
        this.stock = info.stock;
    }
    vender(){
        this.stock = this.stock -1;
    }
    quitarProducto(){

    }
    modificarPrecio(nuevoPrecio){
        
    }
    mostrarProducto(){

    }
}

/*const productos = [
    {nombre: "Microondas", precio: 28000, stock: 4},
    {nombre: "Heladera", precio: 73000, stock: 6},
    {nombre: "Smart Tv", precio: 88000, stock: 3},
    {nombre: "Escritorio", precio: 4700, stock: 7},
];*/

let producto = [];

producto[0] = new Producto({nombre: "Televisor", precio: 100000, stock: 5});
producto[1] = new Producto({nombre: "Televisor", precio: 100000, stock: 4});
producto1 = new Producto({nombre: "Televisor", precio: 100000, stock: 3});

producto[0].vender();

console.log(producto[0]);
console.log(producto[1]);
console.log(producto1);

//productos.push({nombre: "asdas", precio: 28000, stock: 3})


//console.log(productos[0].vender());

/*const producto1 = new Producto({
    nombre: "Microondas", 
    precio: 28900, 
    stock: 5
});
console.log(producto1);*/

/*document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        window.location.reload()
        console.log("web recargada");
    }
});*/

//let ingresoProducto = prompt("¿Desea ingresar un producto? (si/no)");

/*mostrar listado de productos
seleccionar producto

agregar producto
editar producto
eliminar producto
vender producto
remarcar precios
buscar producto*/