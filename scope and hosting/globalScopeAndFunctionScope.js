//global scope

let nameId = 'sri';

function showProductId() {
    console.log(nameId);
};
showProductId();


//

let Product = {
    ProductName: 'phone',
    number: 7894,
    ProductPrice: 5000
};
function showProductDetails() {
    //console.log(Product.ProductName);
}
showProductDetails();
console.log(Product.number);


//function scope

let ProductId1 = 'siva';

function functionScope() {
    //let ProductId1 = 'siva';
    
    function show() {
     
        console.log(ProductId1);
    }
    show()
    console.log(ProductId1);
}
functionScope();





