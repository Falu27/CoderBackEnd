class ProductManager {


    constructor(){
        this.products = [];
    }

    getProducts=()=>{
        return this.products;
    }


    addProduct=({title, description, price, thumbnail, code , stock})=>{
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("All fields are required.")
            return null;
        }

        const product ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        if (this.products.length===0){
            product.id = 1;
        }else{
            const lastProduct = this.products[this.products.length -1]
            product.id= lastProduct.id +1;
        }
        
        const index = this.products.findIndex((codeRep)=> codeRep.code === code);
        if (index !== -1){
            return console.log(`Error: code number ${code} is repeated`);
        }

        this.products.push(product)
    }

    getProductById = (prodcutId)=>{
        const productIndex = this.products.findIndex(product=>product.id===prodcutId);
        if(productIndex===-1){
            console.log("The product id: "+prodcutId+" not exist");
            return null
        }
        console.log("The product with id: "+prodcutId+" exists")

    }


}

ProductManager = new ProductManager()

const product1 ={
        title: "TV 50 Smart",
        description: "Loren bla bla bla",
        price: 80000,
        thumbnail:"./img...",
        code: 10,
        stock: 6

}

const product2 ={
    title: "Tablet Mox",
    description: "Loren bla bla bla",
    price: 30000,
    thumbnail:"./img...",
    code: 27,
    stock: 10

}

const product3 ={
    title: "Xiaomi Note 12",
    description: "Loren bla bla bla",
    price: 125000,
    thumbnail:"./img...",
    code: 27, //Repetimos el code para probar Validacion
    stock: 8

}
//Agregando Productos
ProductManager.addProduct(product1);
ProductManager.addProduct(product2);
ProductManager.addProduct(product3);

ProductManager.getProductById(1); //producto que existe
ProductManager.getProductById(5); //producto no encontrado
//El 3er Producto repite el CODE del 2do para validar.

console.log(ProductManager.getProducts());
