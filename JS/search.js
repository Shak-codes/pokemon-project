// Search algorithm
function searchRouteOne() {

    // Generate random number value for Pokemon
    let num = Math.floor(Math.random() * 151);

    // Generate pokemon
    let pokemon = routeOnePokemon(num);

    if (pokemon != undefined) {

        // Generate "found" Pokemon level
        localStorage.wildPkmnLevel = 2 + Math.floor(Math.random() * 3);

        // Generate "found" Pokemon Individual Values
        generateIV();

        // Generate "found" Pokemon Stats
        getBaseStats(pokemon);

        // Determine proper spot to place captured pokemon
        let x = 1;
        while (x <= 500 && localStorage["pokemon" + x]) {
            x++;
        }
        let pokemonNum = "pokemon" + x;

        // Store pokemon level
        localStorage["pokemon" + x + "Level"] = localStorage.wildPkmnLevel;

        // Store pokemon in storage
        localStorage["pokemon" + x] = pokemon;
        console.log("Pokemon number " + x + " is " + pokemon);

        // Store pokemon Individual Values
        localStorage["pokemon" + x + "HP"] = localStorage.wildPkmnHpIV;
        localStorage["pokemon" + x + "ATK"] = localStorage.wildPkmnAtkIV;
        localStorage["pokemon" + x + "DEF"] = localStorage.wildPkmnDefIV;
        localStorage["pokemon" + x + "SPEED"] = localStorage.wildPkmnSpeedIV;
        localStorage["pokemon" + x + "SPATK"] = localStorage.wildPkmnSpatkIV;
        localStorage["pokemon" + x + "SPDEF"] = localStorage.wildPkmnSpdefIV;

        // Test
        let str = "HP: " + localStorage["pokemon" + x + "HP"] + " ATK: " + localStorage["pokemon" + x + "ATK"];
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