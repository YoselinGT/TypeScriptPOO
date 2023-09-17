import axios from "axios";
import {Product} from "../models/product.model";
import {UpdateProductDto} from "../dtos/product.dto";

export class BaseHttpService<TypeClass> {
    constructor(
        protected url: string
    ){}

    async getAll(){
        const {data} = await axios.get<TypeClass[]>(this.url)
        return data;
    }

    async update<Id,DTO>(id: Id, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }



}

(async() => {
    const service = new BaseHttpService<Product>('https://fakestoreapi.com/products')
    const rta = await service.getAll()
    console.log("rta",rta)

    service.update<Product["id"],UpdateProductDto>(1,{
        title: 'Prueba',
        description: 'Cambio'
    })

    const serviceCategorias = new BaseHttpService<Product>('https://fakestoreapi.com/products/categories')
    const rta2 = await serviceCategorias.getAll()
    console.log("rta2",rta2)

})();