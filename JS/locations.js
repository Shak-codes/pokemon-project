// Locations

function routeOnePokemon(num) {
    if (num >= 0 && num <= 30) {
        console.log("You have found a Pidgey!");
        let pokemon = "Pidgey";
        return pokemon;
    } else if (num >= 120 && num <= 150) {
        console.log("You have found a Ratata!");
        let pokemon = "Rattata";
        return pokemon;
    } 
}

function routeTwoPokemon(num) {
    if (num >= 0 && num <= 15) {
        console.log("You have found a Pidgey!");
        //localStorage.pokemonOne = "Pidgey";
    } else if (num >= 16 && num <= 30) {
        console.log("You have found a Ratata!");
        //localStorage.pokemonOne = "Ratata";
    } else if (num >= 31 && num <= 45) {
        console.log("You have found a Weedle!");
        //localStorage.pokemonOne = "Weedle";
    } else if (num >= 46 && num <= 60) {
        console.log("You have found a Caterpie!");
        //localStorage.pokemonOne = "Caterpie";
    } else if (num >= 61 && num <= 75) {
        console.log("You have found a Nidoran(Male)!");
        //localStorage.pokemonOne = "Nidoran(Male)";
    } else if (num >= 76 && num <= 90) {
        console.log("You have found a Nidoran(Female)!");
        //localStorage.pokemonOne = "Nidoran(Female)";
    } else if (num >= 148 && num <= 150) {
        console.log("You have found a Mr. Mime!");
        //localStorage.pokemonOne = "Mr. Mime";
    }
}

function viridianForest(num) {
    if (num >= 0 && num <= 15) {
        console.log("You have found a Pidgey!");
        //localStorage.pokemonOne = "Pidgey";
    } else if (num >= 16 && num <= 18) {
        console.log("You have found a Pidgeotto!");
        //localStorage.pokemonOne = "Pidgeotto";
    } else if (num >= 19 && num <= 20) {
        console.log("You have found a Pikachu!");
        //localStorage.pokemonOne = "Pikachu";
    } else if (num >= 31 && num <= 45) {
        console.log("You have found a Weedle!");
        //localStorage.pokemonOne = "Weedle";
    } else if (num >= 46 && num <= 60) {
        console.log("You have found a Caterpie!");
        //localStorage.pokemonOne = "Caterpie";
    } else if (num >= 61 && num <= 70) {
        console.log("You have found a Metapod!");
        //localStorage.pokemonOne = "Metapod";
    } else if (num >= 71 && num <= 80) {
        console.log("You have found a Kakuna!");
        //localStorage.pokemonOne = "Kakuna";
    }
}

function routeThree(num) {
    if (num >= 0 && num <= 15) {
        console.log("You have found a Pidgey!");
        //localStorage.pokemonOne = "Pidgey";
    } else if (num >= 16 && num <= 30) {
        console.log("You have found a Spearow!");
        //localStorage.pokemonOne = "Spearow";
    } else if (num >= 31 && num <= 45) {
        console.log("You have found a Ratata!");
        //localStorage.pokemonOne = "Ratata";
    } else if (num >= 46 && num <= 60) {
        console.log("You have found a Sandshrew!");
        //localStorage.pokemonOne = "Sandshrew";
    } else if (num >= 61 && num <= 70) {
        console.log("You have found a Mankey!");
        //localStorage.pokemonOne = "Mankey";
    } else if (num >= 71 && num <= 80) {
        console.log("You have found a Jigglypuff!");
        //localStorage.pokemonOne = "Jigglypuff";
    }
}

function clearPokemon() {
    localStorage.clear();
}



/*
const getPokemon = async str => {
    const url = `https://pokeapi.co/api/v2/pokemon/${str}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon.stats[0]);
}
*/

