//Nros grandes
const aBigNumber = 8907245920742093847n;
const anotherBigNumber = BigInt(8907245920742093847);
console.log(aBigNumber);
console.log(anotherBigNumber);


//valor Nulo
const anotherNumber = null;
const validate = anotherNumber ?? 5;
console.log(validate);