



setTimeout(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((objeto) => {
          return objeto.json();
            
        })
        .then((elementos) => {
            let elementico = elementos[0]
            console.log(elementico)
            console.log("mostrando mensaje en consola")

        })
        .catch((error) => {
            console.log(error)
        });
},1000);

