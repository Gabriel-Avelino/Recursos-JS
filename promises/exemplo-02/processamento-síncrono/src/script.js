const betterDeveloper = 'Bill'

function whoIsBetterCallback(callback, errorCallback){
    if (betterDeveloper != 'Bill' && betterDeveloper != 'Steve'){
        errorCallback({
            name: 'This is wrong',
            message: `${betterDeveloper}? Really`
        })
    } else {
        callback({
            name: betterDeveloper,
            message: `You are the best`
        })
    }
}

whoIsBetterCallback((result)=> console.log(`${result.name}? Yeah! ${result.message}`), 
(error)=> console.log(`${error.name} ${error.message}`)
)