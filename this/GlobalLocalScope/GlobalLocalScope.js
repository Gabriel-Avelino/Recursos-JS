//Global scope

this.name = "Gabriel"

function sayName() {
    //local scope
    console.log(this.name) // undefined
}

sayName();