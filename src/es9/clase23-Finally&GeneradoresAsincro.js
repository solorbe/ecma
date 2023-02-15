//finally
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey");
        } else {
            reject("Whooops!");
        }
    })
}

anotherFunction()
    .then(response => console.log('Then...' + response))
    .catch(err => console.log('catch...' + err))
    .finally(()=> console.log('Finally'));

//generadores asincronos
async function* anotherGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("hello");

//for await
async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names =arrayOfNames(["Alexa", "Oscar", "David"]);
console.log("After");