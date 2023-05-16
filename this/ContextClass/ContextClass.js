//Context Class
//Dentro da classe o this está disponível para ser utilizado por todos os métodos da classe.
class Hello {
    constructor(){
        this.hello = "Olá";
    }

    sayHello(){
        console.log(this.hello);
    }
}

const hello = new Hello();

hello.sayHello();