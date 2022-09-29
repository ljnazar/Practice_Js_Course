class Producto{
    constructor(info) {
        this.nombre = info.nombre;
        this.precio = info.precio;
        this.stock = info.stock;
    }
    listarProducto(){
        return `${this.nombre} - $${this.precio} - stock: ${this.stock}\n`
    }
    vender(){
        this.stock = this.stock -1;
    }
}

let productos = [];

productos.push(new Producto({nombre: "Microondas", precio: 29000, stock: 3}));
productos.push(new Producto({nombre: "Heladera", precio: 72000, stock: 4}));
productos.push(new Producto({nombre: "Licuadora", precio: 8000, stock: 5}));

const buscarProducto = nombreBuscar => {
    let found = false;
    let count = 0;
    let index = "";
    let result = [];
    productos.forEach(element => {
        if(element.nombre === nombreBuscar){
            index = count;
            found = true;
        }
        count++;
    });
    result.push(found);
    result.push(index);
    return result;
}

let opcion = "";

while(opcion !== "6"){
    opcion = prompt("Ingrese una opción:\n\n1- Listar Productos\n2- Ingresar producto\n3- Eliminar Producto\n4- Buscar Producto\n5- Vender Producto\n6 - Salir\n");
    if(opcion !== ""){
        switch(opcion){
            case "1":
                let aux = "";
                productos.forEach(producto => {
                    aux += producto.listarProducto();
                });
                Swal.fire(
                    aux
                )
                //alert(aux);
                break;
            case "2":
                let nombreAdd = prompt("Ingrese producto");
                let precioAdd = prompt("Ingrese precio");
                let stockAdd = prompt("Ingrese cantidad");
                productos.push(new Producto({nombre: `${nombreAdd}`, precio: `${precioAdd}`, stock: `${stockAdd}`}));
                break;
            case "3":
                let nombreDel = prompt("Ingrese nombre del producto a eliminar");
                let resultCase3 = buscarProducto(nombreDel);
                const foundCase3 = resultCase3[0];
                const indexCase3 = resultCase3[1];
                if(foundCase3){
                    productos = productos.filter((e) => e !== productos[indexCase3]);
                    alert("Producto borrado con éxito");
                }
                else{
                    alert("Producto no encontrado");
                }
                break;
            case "4":
                let nombreBuscar = prompt("Ingrese nombre del producto a buscar");
                let resultCase4 = buscarProducto(nombreBuscar);
                const foundCase4 = resultCase4[0];
                foundCase4 ? alert("Producto encontrado") : alert("Producto no encontrado");
                break;
            case "5":
                let nombreVender = prompt("Ingrese nombre del producto a vender");
                let resultCase5 = buscarProducto(nombreVender);
                const foundCase5 = resultCase5[0];
                const indexCase5 = resultCase5[1];
                foundCase5 && productos[indexCase5].vender();
                foundCase5 ? alert("Producto vendido con éxito") : alert("Producto no encontrado")
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