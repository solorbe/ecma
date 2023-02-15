//Clases 
class User { //declaramos una clase
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    //metodos de la clase
    speak() {
        return "Hello";
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    //Getters y Setters
    get uAge() {
        return this.age; //Obtenemos el valor de "Age"
    }
    
    set uAge(n) {
        this.age = n; //Seteamos un nuevo valor en "Age"
    }
}

const ana = new User("Ana", 25); //Creamos un nuevo usuario (instancia) que hereda de la clase User
console.log(ana.greeting()); //Accedemos al usuario ana y a su metodo Greeting
console.log(ana.uAge); //Accedemos al usuario ana y a su Getter
console.log(ana.uAge = 30); //Accedemos al usuario ana y a su Setter

//otro ejemplo
class Rectangulo {
  constructor (alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  // Getter
  get area() {
     return this.calcArea();
   }
  // Método
  calcArea () {
    return this.alto * this.ancho;
  }
}

const cuadrado = new Rectangulo(10, 10);
console.log(cuadrado.area); // 100