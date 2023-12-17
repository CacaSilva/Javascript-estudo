// let f = function(n1,n2){
//     return n1 * n2

// }
// console.log(f(4,5))    //20

//_______________________CONSTRUTOR______________________________________
const f = new Function("v1","v2","v3", "return v1 * v2 * v3")           //Função construtor anônima, letra F deve ser maíuscula

console.log(f(4,5,6))
