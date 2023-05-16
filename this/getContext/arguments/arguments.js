//Arguments
//É uma forma de passar vários argumentos de maneira simplificada.
function multiply(){
    const args = Array.from(arguments);
    return args.reduce((acc, item) =>{
        return acc * item;
    }, 1);
};

const total = multiply.apply (this, [2, 2, 3, 4]);

console.log (total);