function bestRockBand (band){
    return new Promise ((resolve, reject)=>{
        if(band === 'Queen'){
            resolve(
                {
                    success: true,
                    bandName: band,
                    message: `${band} is the best rock band ever!`
                }
            );
        }else{
            reject(
                {
                    success: false,
                    message: `I'm not so sure!`
                }
            );
        }
    });
};

function bestRockSong(response){
    return new Promise ((resolve, reject)=>{
        if(response.success){
            resolve(`Bohemian Rhapsody by ${response.bandName}`)
        }else{
            reject(`Do you know Queen?`)
        }
    })
}

bestRockBand('Queen')
    .then(response => {
        console.log ('Checking the answer...');
        return  bestRockSong(response)
    })
    .then(response => {
        console.log ('Finding the best song...');
        console.log(response)
    })
    .catch(err => console.log(err.message))