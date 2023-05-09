var pokemonName;
var imageLocation = "";
var stringify;
var imageDisplay; 
var imgDisplayMini;
var apiLink; 
var apiPermittedName;
var abilities; 
var typeDisplay;
var statDisplay;

function setter (namedResult){
    pokemonName = namedResult; 
    console.log(pokemonName + " pokemon.js reported!");
    imageLocation = './data/images/'+pokemonName+'.png'
    apiPermittedName = pokemonName.toLowerCase();

    apiLink = 'https://pokeapi.co/api/v2/pokemon/'+apiPermittedName
    fetch(apiLink).then((response) => response.json()).then((data) =>{
        console.log(data);
        const pokemon = {
            name: data.name,
            id: data.id, 
            image: data.sprites['front_default'],
            abilities: data.abilities.map((ability) => ability.ability.name).join(', '),
            type: data.types.map((type) => type.type.name).join(', '),
            stats: data.stats
        };
        
        imgDisplayMini = document.getElementById("displayMini")
        imgDisplayMini.src = pokemon.image;
        typeDisplay = document.getElementById("types");
        typeDisplay.innerHTML = "Type: " + pokemon.type;
        statDisplay = document.getElementById("stats");
        statDisplay.innerHTML = "HP: " + pokemon.stats[0].base_stat + "\xa0\xa0\xa0\xa0ATK: " + pokemon.stats[1].base_stat + "\xa0\xa0\xa0\xa0DEF: " + pokemon.stats[2].base_stat + "\xa0\xa0\xa0\xa0SP. ATK: " + pokemon.stats[3].base_stat + "\xa0\xa0\xa0\xa0SP. DEF: " + pokemon.stats[4].base_stat + "\xa0\xa0\xa0\xa0SPEED: " + pokemon.stats[5].base_stat
        
    })


}
