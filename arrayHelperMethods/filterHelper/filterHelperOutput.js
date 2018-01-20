var products = [
    {name: 'cucumber', type: 'vegetable', quantity : 100, price : 5},
    {name: 'potato', type: 'vegetable', quantity : 10, price : 5},
    {name: 'tomato', type: 'vegetable', quantity : 0, price : 1},
    {name: 'banana', type: 'fruit', quantity : 10, price : 15},
    {name: 'celery', type: 'vegetable', quantity : 30, price : 13},
    {name: 'orange', type: 'fruit', quantity : 3, price : 5}
];

filteredProducts = [];

for (var i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

// filteredProducts.forEach(function (product) {
//     console.log(product);
// });

// filteredProducts = products.filter(function (product) {
//     return product.type === 'fruit';
// });

//Type is 'vegetable', quantity is greater than 0, price is less than 10
// filteredProducts = products.filter(function (product) {
//    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
// });
//
// console.log(filteredProducts);

var post = {id : 4, title : 'New Post'};
var comments = [
    {postId : 4, content : 'awesome content'},
    {postId : 3, content : 'it was ok'},
    {postId : 4, content : 'neat'}
];

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
       return comment.postId === post.id;
    });
}

console.log(commentsForPost(post, comments));


























