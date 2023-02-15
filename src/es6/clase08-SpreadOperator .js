//Spread operator | Operador de Propagación

let person = {name: 'Julian', age:28}
let country = 'CO';
let data = {...person, country};
console.log(data);

//PARAMETROS REST

function sum(num, ...values){
console.log(values);
console.log(num + values[0]);
return num + values [0];
}
sum(2,3,4,5);