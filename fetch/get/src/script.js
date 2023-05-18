fetch('https://reqres.in/api/users')
    .then((res) => {
        if (res.ok){
            console.log('Success')
            return res.json()
        } else{
            console.log('Error')
        }
        
    })
    .then((data) => console.log(data.data.map(user => console.log (user.first_name))))
    .catch((err) => console.log(err))