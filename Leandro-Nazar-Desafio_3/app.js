class Producto{
    constructor(info) {
        this.nombre = info.nombre;
        this.precio = info.precio;
        this.stock = info.stock;
    }
    mostrar(){
        return `${this.nombre} - $${this.precio} - stock: ${this.stock}\n`
    }
    /*listarProductos(productos){
        productos.forEach(element => {
            console.log(element);
        });
    }
    agregarProducto(){
        
    }
    quitarProducto(){

    }
    vender(){
        this.stock = this.stock -1;
    }
    modificarProducto(nombre, precio, stock){

    }
    remarcarPrecio(){
        
    }
    buscarProducto(){

    }*/
}

let productos = [];

productos.push(new Producto({nombre: "Microondas", precio: 29000, stock: 3}));
productos.push(new Producto({nombre: "Heladera", precio: 72000, stock: 4}));
productos.push(new Producto({nombre: "Licuadora", precio: 8000, stock: 5}));

let opcion = "";

while(opcion !== "6"){
    opcion = prompt("Ingrese una opción:\n\n1- Listar Productos\n2- Ingresar producto\n3- Eliminar Producto\n4- Vender Producto\n5- Remarcar precios\n6- Salir");
    if(opcion !== ""){
        switch(opcion){
            case "1":
                let aux = "";
                productos.forEach(producto => {
                    aux += producto.mostrar();
                });
                alert(aux);
                break;
            case "2":
                let nombreAdd = prompt("Ingrese producto");
                let precioAdd = prompt("Ingrese precio");
                let stockAdd = prompt("Ingrese cantidad");
                productos.push(new Producto({nombre: `${nombreAdd}`, precio: `${precioAdd}`, stock: `${stockAdd}`}));
                break;
            case "3":
                let nombreDel = prompt("Ingrese nombre del producto a eliminar");
                let count = 0;
                let index = "";
                productos.forEach(element => {
                    if(element.nombre === nombreDel){
                        index = count;
                    }
                    count = count + 1;
                });
                if(index !== ""){
                    productos = productos.filter((e) => e !== productos[index]);
                    alert("Producto borrado con éxito");
                }
                else{
                    alert("Producto no encontrado");
                }
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            default:
                alert("Opción no válida");
                break;
        }
    }
    else{
        alert("Opción no ingresada")
    }
}