// Locations

function routeOnePokemon(num) {
    if (num >= 0 && num <= 30) {
        console.log("You have found a Pidgey!");
        let pokemon = "Pidgey";
        return pokemon;
    } else if (num >= 120 && num <= 150) {
        console.log("You have found a Ratata!");
        let pokemon = "Ratata";
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
        //localStorage.pokemonOne = "Jigglypugg";
    }
}

// Search algorithm
function searchRouteOne() {

    // Generate random number value
    let num = Math.floor(Math.random() * 151);

    // Generate pokemon
    let pokemon = routeOnePokemon(num);

    // Determine proper spot to place captured pokemon
    let x = 1;

    while (x <= 500 && localStorage["pokemon" + x]) {
        x++;
    }

    // Store pokemon in storage
    if (pokemon != undefined) {
        localStorage["pokemon" + x] = pokemon;
        console.log("Pokemon number " + x + " is " + pokemon);
    } else console.log("No pokemon found");

}

function clearPokemon() {
    localStorage.clear();
}

function viewStorage() {
    let pokemon = "";
    for (let x = 1; x <= 500 && localStorage["pokemon" + x]; x++) {
        pokemon += localStorage["pokemon" + x];
        pokemon += " ";
        if (x % 10 == 0) {
            pokemon += "\n";
        }
    }

    document.getElementById("storage").innerHTML = pokemon;
    
}