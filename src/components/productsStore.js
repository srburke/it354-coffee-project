
const productsArray = [
    {
        id: "1",
        title: "Starbucks Spring Day Blend",
        price: "17.49",
        Image: "./images/StarSpringDayBlend.jpeg"
    },
    {
        id: "2",
        title: "Starbucks Caffè Verona",
        price: "10.00",
        Image: "./images/StarCaffeVerona.jpeg"
    },
    {
        id: "3",
        title: "Coffee pods 15ct",
        price: "12.99",
        Image: "coffeeBeans.jpg"
    },
]


function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if(productData == undefined){
console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}


export {productsArray, getProductData};