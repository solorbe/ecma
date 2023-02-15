// flat
const array = [1,1,2,3,4, [1,3,5,6,[1,2,4]]];
console.log(array.flat(3));


// flatmap
const arr1 = [1, 2, [3], [4, 5], 6, []];
const flattened = arr1.flatMap(num => num);
console.log(flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]

//TrimStart-trimEnd
const hello = "       Hello World!   ";
console.log(hello.trimStart());
console.log(hello.trimEnd());