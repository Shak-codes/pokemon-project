function routeOnePokemon(num) {
    if (num >= 0 && num <= 30) {
        console.log("You have found a Pidgey!");
        localStorage.pokemonOne = "Pidgey";
    } else if (num >= 120 && num <= 150) {
        console.log("You have found a Ratata!");
        localStorage.pokemonOne = "Ratata";
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
        console.log("You have found a Pikachu");
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

function searchRouteOne() {
    let num = Math.floor(Math.random() * 151);
    routeOnePokemon(num);
    if (localStorage.pokemonOne) {
        document.getElementById("result").innerHTML = "You have a " + localStorage.pokemonOne;
    } else {
        document.getElementById("result").innerHTML = "You have no pokemon";
    }
}