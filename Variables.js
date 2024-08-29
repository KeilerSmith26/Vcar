var Carros [= 1] [, Veiculos [= 2] ... [, usados [=6]]];


let Carros [= 2] [, var2 [= 4]] [, ..., varN [= 5]];



const Carros = value1 [, varname2 = value2 [, varname3 = value3 [, ... [, varnameN = valueN]]]];

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
  
  