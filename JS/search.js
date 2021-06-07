// Search algorithm
function searchRouteOne() {

    // Generate random number value for Pokemon
    let num = Math.floor(Math.random() * 151);

    // Generate pokemon
    let pokemon = routeOnePokemon(num);

    if (pokemon != undefined) {

        let arr=["Hp", "Atk", "Def", "Spatk", "Spdef", "Speed"];

        // Generate "found" Pokemon level
        localStorage.wildPkmnLevel = 2 + Math.floor(Math.random() * 3);

        // Generate "found" Pokemon Individual Values
        generateIV();

        // Determine proper spot to place captured pokemon
        let x = 1;
        while (x <= 500 && localStorage["pokemon" + x]) {
            x++;
        }
        let pokemonNum = "pokemon" + x;

        // Generate "found" Pokemon Stats
        getBaseStats(pokemon, x);

        // Store Pokemon in storage
        localStorage["pokemon" + x] = pokemon;
        console.log("Pokemon number " + x + " is " + pokemon);

        // Store Pokemon level
        localStorage["pokemon" + x + "Level"] = localStorage.wildPkmnLevel;

        // Store Pokemon Individual Values
        for (let i = 0; i < 6; i++) {
            localStorage["pokemon" + x + arr[i] + "IV"] = localStorage["wildPkmn" + arr[i] + "IV"];
        }

        for (let i = 0; i < 6; i++) {
            //console.log(arr[i] + ": " + localStorage["pokemon" + x + arr[i] + "IV"]);
        }

        //console.log(localStorage["pokemon" + x + "HpStat"]);

        // Test
        //let str = "HP: " + localStorage["pokemon" + x + "HpStat"] + " ATK: " + localStorage["pokemon" + x + "AtkStat"];
        //console.log(str);

        
        // Clear "found" pokemon Individual Values
        /*
        localStorage.removeItem("wildHp");
        localStorage.removeItem("pokemonFoundAtk");
        localStorage.removeItem("pokemonFoundDef");
        localStorage.removeItem("pokemonFoundSpeed");
        localStorage.removeItem("pokemonFoundSpatk");
        localStorage.removeItem("pokemonFoundSpdef");
        */
        

    } else console.log("No pokemon found");

}