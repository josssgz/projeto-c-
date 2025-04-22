const imagem = document.querySelector('img');
const form = document.getElementById('form');
const inputId = document.getElementById('id');
const nome = document.getElementById('nome-pokemon');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const endpoint = inputId.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            imagem.src = `${data.sprites.front_default
            }`;
            nome.innerText = `${data.name}`;
        });
})


// codigo assincrono