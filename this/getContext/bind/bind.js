//Bind
//bind=ligar
//Retorna a função chamada, porém, ligada ao contexto que lhe foi passado.
//bound function
this.name = "Gabriel";
this.age = 18;

function sayName (age){
    this.age = arguments[0];
    console.log(this.name, this.age);
};

const dev = {
    name: "Avelino"
};

sayName.bind(dev)(19)
