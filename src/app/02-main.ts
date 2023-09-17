import {ProductService} from "./service/product.service";
import {faker} from "@faker-js/faker";


const productService = new ProductService();

productService.create({
    title: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(),10),
    description: faker.commerce.productDescription(),
    category:  faker.commerce.productMaterial(),
    image: faker.image.url()
});

console.log(productService.getAll())

const products = productService.getAll()
const productoId = products[0].id;


productService.updateProducto(productoId,{
    title:"update name"
});


console.log(productService.getAll())
