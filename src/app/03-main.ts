import {ProductHttpService} from "./service/product-http.service";

( async () => {
    const productService = new ProductHttpService()


    const products = await productService.getAll();

    console.log('---'.repeat(60))
    console.log('getAll')
    console.log(products.length)

    const productId = products[0].id;

    const updateData = await productService.update(productId,{
        price: 1000,
        title: "Prueba",
        description: "Descripción"
    })

    console.log('---'.repeat(60))
    console.log('update')
    console.log(updateData)

    const product = await productService.findOne(productId);
    console.log('---'.repeat(60))
    console.log('findOne')
    console.log(product)

})();
