import {BaseHttpService} from "./base-http.service";
import {Product} from "../models/product.model"
import {UpdateProductDto} from "../dtos/product.dto";
import {ProductHttp2Service} from "./product-http2.service";

export class ProductCrudService {
    protected url = 'https://fakestoreapi.com/products'
    private http = new ProductHttp2Service(this.url)

    async update(id: Product['id'],dto: UpdateProductDto){
        return this.http.update(id,dto)
    }
}