//Apply
//function.apply(this, [arg1, arg2])
//Retorna o this do contexto enviado.
this.name = "Gabriel";
this.age = 18;

function sayName (age){
    this.age = arguments[0];
    console.log(this.name, this.age);
}

const dev = {
    name: "Avelino"
}

sayName.apply(this, [19]);