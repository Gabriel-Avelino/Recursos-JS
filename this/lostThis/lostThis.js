//lostThis
//Isso ocorre quando tiramos uma função de um contexto e usamos em outro. Nesse caso, perdemos os valores e o resultado é "undefined", pois essa ação desliga o elemento do contexto.
//Para resolver isso, usamos o método bind().
this.name = "Gabriel";
this.age = 19;

function sayName (age){
    this.age = arguments[0];
    console.log(this.name, this.age);
};

const dev = {
    name: "Avelino", 
    age: 16,
    sayAge: function(){
        console.log(this.name, this.age);
    }
};

const age = dev.sayAge.bind(this);

age()