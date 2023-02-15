const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./clase30-modulo.js");
    console.log(module);
    module.hello();
})