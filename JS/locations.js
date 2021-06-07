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

    if (pokemon != undefined) {

        // Generate "found" pokemon Individual Values
        generateIV();

        // Determine proper spot to place captured pokemon
        let x = 1;

        while (x <= 500 && localStorage["pokemon" + x]) {
            x++;
        }

        // Store pokemon in storage
        localStorage["pokemon" + x] = pokemon;
        console.log("Pokemon number " + x + " is " + pokemon);

        // Store pokemon Individual Values
        localStorage["pokemon" + x + "HP"] = localStorage.pokemonFoundHp;
        localStorage["pokemon" + x + "ATK"] = localStorage.pokemonFoundAtk;
        localStorage["pokemon" + x + "DEF"] = localStorage.pokemonFoundDef;
        localStorage["pokemon" + x + "SPEED"] = localStorage.pokemonFoundSpeed;
        localStorage["pokemon" + x + "SPATK"] = localStorage.pokemonFoundSpatk;
        localStorage["pokemon" + x + "SPDEF"] = localStorage.pokemonFoundSpdef;

        // Test
        let str = "HP: " + localStorage.pokemonFoundHp + " ATK: " + localStorage.pokemonFoundAtk;
        console.log(str);

        // Clear "found" pokemon Individual Values
        localStorage.removeItem("pokemonFoundHp");
        localStorage.removeItem("pokemonFoundAtk");
        localStorage.removeItem("pokemonFoundDef");
        localStorage.removeItem("pokemonFoundSpeed");
        localStorage.removeItem("pokemonFoundSpatk");
        localStorage.removeItem("pokemonFoundSpdef");

        

    } else console.log("No pokemon found");

}

function clearPokemon() {
    localStorage.clear();
}

function viewStorage() {
    for (let x = 1; x <= 500 && localStorage["pokemon" + x]; x++) {
        let str = "pokemon" + x;
        document.getElementById(str).src = "../Assets/" + localStorage["pokemon" + x] + ".png";
    }

}

function generateIV() {
    localStorage.pokemonFoundHp = Math.floor(Math.random() * 32);
    localStorage.pokemonFoundAtk = Math.floor(Math.random() * 32);
    localStorage.pokemonFoundDef = Math.floor(Math.random() * 32);
    localStorage.pokemonFoundSpeed = Math.floor(Math.random() * 32);
    localStorage.pokemonFoundSpatk = Math.floor(Math.random() * 32);
    localStorage.pokemonFoundSpdef = Math.floor(Math.random() * 32);
}

function checkStats(pokemon) {
    document.getElementById("HP").innerHTML = "HP: " + localStorage[pokemon + "HP"];
    document.getElementById("ATK").innerHTML = "ATK: " + localStorage[pokemon + "ATK"];
    document.getElementById("DEF").innerHTML = "DEF: " + localStorage[pokemon + "DEF"];
    document.getElementById("SPATK").innerHTML = "SPATK: " + localStorage[pokemon + "SPATK"];
    document.getElementById("SPDEF").innerHTML = "SPDEF: " + localStorage[pokemon + "SPDEF"];
    document.getElementById("SPEED").innerHTML = "SPEED: " + localStorage[pokemon + "SPEED"];
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon.stats);
}


