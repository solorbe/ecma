//regex
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec("2022-01-01");
console.table(matchers);

//spread operator
const user = { username: "gndx", age: 34, coutry: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);


const objetoOriginal = {a: 1, b: 2};
const objetoReferencia = objetoOriginal;
const objetoCopia = {...objetoOriginal};

objetoReferencia === objetoOriginal; // true
objetoOriginal === objetoCopia; // false

