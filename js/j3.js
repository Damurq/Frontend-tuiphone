let array=[1,2,3,4,5]
let array2=[5,4,3,2,1]
const funcionPrueba= (arr) => arr.reduce((acc,el) => acc > el ? acc : el)
const b = funcionPrueba([1,2,3,4,5]);
const c = funcionPrueba(array2);
console.log("a es iguala :"+b);
console.log("b es iguala :"+c);

 
