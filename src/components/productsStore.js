
const productsArray = [
    {
        id: "1",
        title: "Coffee 1",
        price: "$7.99"
    },
    {
        id: "2",
        title: "Coffee 2",
        price: "$6.99"
    },
    {
        id: "3",
        title: "Coffee pods 15ct",
        price: "$12.99"
    },
]


function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if(productData === undefined){
console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}


export {productsArray, getProductData};