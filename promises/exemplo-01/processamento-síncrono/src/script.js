function sum (){
    let result = 1 + 1
    if(result === 2){
        successCallback();
    } else{
        errorCallback();
    }
}

function successCallback(){
    console.log("Yeah! Number two!")
}

function errorCallback(){
    console.log("Ops! Something wrong.")
}

sum();