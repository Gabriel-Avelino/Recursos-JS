//Context function inside a function
//Não pega o this global.
this.name = 'Gabriel';

function age(age) {
    //const name = this.name;

    this.name = 'Avelino';

    function birthYear(age) {
        this.name = 'Santos'
        const year = 2023 - age
        console.log(this.name, year)
    }

    birthYear(age);

    console.log(this.name)
} //Essa function cria um escopo local e a function interna consegue pegar a ideia desse escopo. Se quisermos pegar o avlor global, precisamos armazená-lo em uma variável, porque ele pode ser perdido conforme as alterações dentro das funções.

age(19);
console.log (this.name)