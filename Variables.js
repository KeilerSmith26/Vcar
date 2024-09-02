
// objeto
const persona = {
    nombre: ["Bob", "Smith"],
    edad: 32,
    genero: "masculino",
    intereses: ["música", "esquí"],
    bio: function () {
      alert(
        `${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años. Le gusta ${this.intereses[0]} y ${this.intereses[1]}.`,
      );
    },
    saludo: function () {
      alert("Hola, Soy " + this.nombre[0] + ". ");
    },
  };
  


// varaiblees 
const perSona = [nombre, edad, ciudad]
console.log(perSona);


// bucle for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// bucle while
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}
// Crear una función que tome dos números como parámetros y devuelva su producto
function calcularProducto(num1, num2) {
  return num1 * num2;
}
const resultado = calcularProducto(5, 3);
console.log("El producto es", resultado); 

// Convertir una función declarada en una función flecha
function suma(a, b) {
  return a + b;
}



  