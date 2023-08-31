const lista = document.getElementById("lista");

const pedirPersonajes = async () => {
    try{
        const response = await fetch("https://rickandmortyapi.com/api/characterdata")
        const data = await response.json();
        const personajes = data.results;

        personajes.forEach(item => {
            const li = document.createElement ("ul");
            li.innerHTML = `
            <h2>${item.name}</h2>
            <h3>${item.species}</h3>
            <img src=${item.image}></img>`;
    
            lista.append(li)
        });
    }
     catch (error) {
        console.log(error)
    }

};

pedirPersonajes();