// Variable para la Api

let Api = 'https://rickandmortyapi.com/api/character'

// Variable para consultar datos de los json y pasarlos por un fetch

let getData = (apiUrl) => {

    return fetch(apiUrl)
           .then(response => response.json())
           .then(json => {
               printData (json),
               pagi(json.info)
            
            })
           
           // surgue algun error

           .catch (Error => {console.log('Error: ', Error) })

}

// Variable para recibir los datos del La Api

let printData = (data) =>{

    // Varible html

    let html = '';

    // foreach para recorrer json 

    data.results.forEach(character => {

        html += `<div class="col-6 .col-md-4">` //  Div Begin

            html += `<div class="card" id="card-top" >`

                html += `<img src="${character.image}" class="avatar avatar-xl rounded-circle" alt="...">`

                html += `<div class="card-body">

                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">${character.gender}</p>
                    <p class="card-title">${character.species}</p>`

                html += `</div>`

            html += `</div>`

        html += `</div>` // Div End
    });

    // Imprimir datos del Json

    document.getElementById ('container').innerHTML = html

    


   
}

// Variable para boton de prev y next
let pagi = (info) => {

    let preDisable = info.prev == null ? 'disabled' : '';

    let html = `<li class="btn btn-outline-light ${preDisable}" onclick="getData('${info.prev}')">Previous</li>`
        html += `<li class="btn btn-outline-light" onclick="getData('${info.next}')">Next</li>`

        document.getElementById('botonNext').innerHTML = html;
}


// función filtar


function filter (){
    document.getElementById('searchview');
    document.getElementById('container').innerHTML= JSON.stringify(getData.filter(item => {
        return item.name == searchview.value;
    }))
}

getData(Api)