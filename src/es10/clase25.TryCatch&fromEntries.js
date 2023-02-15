//try & catch
try {
    hello ();
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
} catch {
    console.log("esto es un error")
}

//fromEntries
const entries = new Map ([["name", "alexa"], ["age", 24]]);
console.log(entries);
console.log(Object.fromEntries(entries));