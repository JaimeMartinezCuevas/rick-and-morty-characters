const characterList = document.getElementById('character-list')
const previousPage = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')

const endPointRickAndMorty = 'https://rickandmortyapi.com/api/character/?page='
let paginaActual = 1

function getRickAndMortyCharacters(url) {
    characterList.innerHTML = ''
    fetch(`${url} ${paginaActual}`).then(res => {
        if (!res.ok) {
        throw new Error('Ha habido un error');
    }   else {
        return res.json()
    }
}).then(datos => {

    datos.results.forEach(character => {
        let listItem =`
        <li>
            <img src="${character.image}" alt="${character.name}"/>
            <p><span>Nombre:</span>${character.name}</p>
            <p><span>Especie:</span>${character.species}</p>
        </li>
        `
        characterList.innerHTML += listItem
    });
})

}

previousPage.addEventListener('click', function() {
    paginaActual --

    if(paginaActual == 0) {
    paginaActual = 1
    }
    getRickAndMortyCharacters(endPointRickAndMorty)
})

previousPage.addEventListener('click', function() {
    paginaActual ++;
    getRickAndMortyCharacters(endPointRickAndMorty)
})

getRickAndMortyCharacters(endPointRickAndMorty);