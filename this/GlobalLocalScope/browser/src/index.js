this.name = "Bia";

function sayName(){
    console.log(this.name);
} //Esse método (contexto de função) no browser é um código funcional e puxará o valor global, a menos que usemos o "use strict", que é utilizado para evitar erros de contexto.

const user = {
    //name: "Bia",
    sayName: function(){
        console.log (this.name);
    }
} //Nesse caso (contexto de método), ele puxará somente o valor que está no objeto, nunca puxará o global.

user.sayName();

//O this dentro do browser é a mesma coisa que window.
console.log(window.name);