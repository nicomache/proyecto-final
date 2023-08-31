const lista = document.getElementById("lista");

const pedirProductos = async () => {
    try{
        const response = await fetch("./dataserver.json")
        const data = await response.json();
        console.log(data);

        data.forEach(item => {
            const card = document.createElement("div")
            card.innerHTML = `
            <h2>${item.nombre}</h2>
            <h3>$${item.precio}</h3>
            <p>${item.marca}</p>
            <img src="${item.imagen}"></img>`
            lista.append(card)
        });
    
    }
     catch (error) {
        console.log(error)
    }
};

pedirProductos();