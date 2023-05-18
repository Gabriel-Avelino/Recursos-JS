function pegaDados() {
    const resultado = fetch('https://api.github.com/users/Gabriel-Avelino')
   .then((res)=>{ console.log(res)})
       console.log(resultado)
   }

   pegaDados()