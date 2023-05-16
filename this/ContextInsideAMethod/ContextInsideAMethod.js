//Context Inside a Method
//Não pega o this global, somente do objeto, independente de estar dentro do this ou não.
this.name = "Gabriel";

const dev = {
    name: "Avelino",
    sayName: function(){
        console.log(this.name); //Avelino
    }
};

dev.sayName();