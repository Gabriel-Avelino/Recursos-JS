//Arrow 
//Quando utilizamos arrow function, o funcionamento de this é um pouco diferente.
this.name = 'Gabriel';

const age = (age) => {
    this.name = 'Gamaliel';
    const birthYear = (age) => {
        const year = 2023 - age
        console.log(this.name, year)
    }

    birthYear(age);
} //Esse método chamará o this do escopo anterior não precisando passar os métodos de call, apply e bind. Porém, se passarmos um this interno, ele alterará o this do escopo anterior.

//age(19);

//console.log(this.name)

const dev = {
    sayName: () =>{
        this.name = 'Micaías'
    }
}; //O erro da arrow function também está presente quando criamos um método.

dev.sayName();
console.log(this.name);