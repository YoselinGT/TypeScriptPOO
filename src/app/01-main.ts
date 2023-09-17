import axios from "axios";
import {Product} from "./models/product.model";

( async() => {
    async function getProductsAsync():Promise<Product[]>{
        const {data} = await axios.get<Product[]>('https://fakestoreapi.com/products')

        // Forzando el tipo
        //const rtaForzadoTipo = await axios.get<Product[]>('https://fakestoreapi.com/products')
        //const dataForzandoTipo = rtaForzadoTipo.data as Product[];

        return data
    }
    const products = await getProductsAsync();
    console.log(products.map(item => `${item.id} - ${item.title}`))
    console.log('---'.repeat(70))
})();