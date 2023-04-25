const pokemonName = document.querySelector('.pokemon-name') // Nome do pokemon
const pokemonNumber = document.querySelector('.pokemon-number') // ID do pokemon
const pokemonImage = document.querySelector('.pokemon-image') // Gif do pokemon

const form = document.querySelector('.form') 
const input = document.querySelector('.input-search') // // Input de pesquisa por pokemon

const buttonPrev = document.querySelector('.btn-prev') // Botão de voltar
const buttonNext = document.querySelector('.btn-next') // Botão de avançar

let searchPokemon = 1; // Valor inicial do ID do pokemon

// Criando uma requisição assíncrona
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    // Se a requisição ocorrer, execute:
    if (APIResponse.status == 200) {
        const data = await APIResponse.json()
        return data;
    }
}