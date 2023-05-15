//Context inside a function.
//Não pega o this global, mas se não estiver no modo estrito sim. No node, o modo estrito é o padrão.

this.name = 'Bia'

function sayName(){
    console.log(this.name);
}

sayName();