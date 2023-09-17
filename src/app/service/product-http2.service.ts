import {BaseHttpService} from "./base-http.service";
import {Product} from "../models/product.model";

export class ProductHttp2Service extends BaseHttpService<Product>{
    otroRequest(){
        super.url
    }
}