
import {faker} from '@faker-js/faker'
import {Product} from "../models/product.model";
import {CreateProductDto,UpdateProductDto} from "../dtos/product.dto";

export class ProductService implements ProductService{

    private productos: Product[] = [];

    getAll (){
        return this.productos
    }

     create(data: CreateProductDto): Product {
        const newProducto = {
            ...data,
            id: parseInt(faker.string.numeric(),10),
            title: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(),10),
            description: faker.commerce.productDescription(),
            category:  faker.commerce.productMaterial(),
            image: faker.image.url(),
            rating: {
                id: parseInt(faker.string.numeric(),10),
                rate: faker.number.int({min: 10, max:100}),
                count:  faker.number.int({min: 10, max:100})
            }
        }



        return this.add(newProducto);
    }

    add(product: Product){
        this.productos.push(product)
        return product
    }

    updateProducto =(id: Product['id'], changes: UpdateProductDto) :Product => {

        const index = this.productos.findIndex(item => item.id === id)

        const prevData = this.productos[index];

        this.productos[index] = {
            ...prevData,
            ...changes
        }

        return  this.productos[index];
    }

    findOne(id: Product['id']){
         return this.productos.find(item => item.id === id)
    }

}


