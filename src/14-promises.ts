import axios from "axios";

( async() => {
    function delay(time: number) {
        const promise = new Promise<boolean>((resolve) => {
            setTimeout(() => {
                resolve(true);
            },time)
        })
        return  promise;
    }

    function getProducts(){
        const promise = axios.get('https://fakestoreapi.com/products')
        return promise
    }

    async function getProductsAsync(){
        const promise = await axios.get('https://fakestoreapi.com/products')
        return promise.data
    }

    console.log('---'.repeat(70))
    const rta = await delay(3000);
    console.log(rta)

    console.log('---'.repeat(70))

    const products = await getProducts();
    console.log(products.data)

    console.log('---'.repeat(70))


    const products2 = await getProductsAsync();
    console.log(products2)
    console.log('---'.repeat(70))


})();