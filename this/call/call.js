//Call
//function.call(this, arg1, arg2)
//call do inglês chamar.
//Retorna o this do contexto que eu enviar.

this.name = "Gabriel";

function sayName (age){
    this.age = age
    console.log(this.name, this.age);
}

const dev = {
    name: "Avelino"
}

sayName.call(this, 19);
sayName.call(dev, 19);

console.log(this.age);
console.log(dev.age);