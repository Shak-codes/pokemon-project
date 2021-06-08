// GENERATE STATS

// Generate IV's
function generateIV() {
    localStorage.wildPkmnHpIV = Math.floor(Math.random() * 32);
    //console.log("HpIV: " + localStorage.wildPkmnHpIV);
    localStorage.wildPkmnAtkIV = Math.floor(Math.random() * 32);
    //console.log("AtkIV: " + localStorage.wildPkmnAtkIV);
    localStorage.wildPkmnDefIV = Math.floor(Math.random() * 32);
    //console.log("DefIV: " + localStorage.wildPkmnDefIV);
    localStorage.wildPkmnSpatkIV = Math.floor(Math.random() * 32);
    //console.log("SpatkIV: " + localStorage.wildPkmnSpatkIV);
    localStorage.wildPkmnSpdefIV = Math.floor(Math.random() * 32);
    //console.log("SpdefIV: " + localStorage.wildPkmnSpdefIV);
    localStorage.wildPkmnSpeedIV = Math.floor(Math.random() * 32);
    //console.log("SpeedIV: " + localStorage.wildPkmnSpeedIV);
}

const getMoves = async str => {
    str = str.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${str}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    const moves = pokemon.moves;
    //console.log(moves);
    for (i in moves) {
        //console.log(moves[i].move.name);
        let moveDet = moves[i].version_group_details;
        //console.log(moveDet);
        for (j in moveDet) {
            if (moveDet[j].version_group.name === "black-2-white-2" &&
                moveDet[j].move_learn_method.name === "level-up") {
                console.log("Lvl: " + moveDet[j].level_learned_at);
                console.log("Move: " + moves[i].move.name);
            }
            //console.log(moveDet.version_group_details.version_group.name === "black-2-white-2");
            //console.log(moveDet);
        }
    }
    //console.log(moves);
}

getMoves("bulbasaur");

// Obtain base stats from API
const getBaseStats = async (str, idx) => {
    str = str.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${str}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    //console.log(pokemon.stats);
    assignBaseStats(pokemon.stats, idx);
}

// Assign base stats to localStorage
function assignBaseStats(stats, idx) {
    let statsArr = ['Hp', 'Atk', 'Def', 'Spatk', 'Spdef', 'Speed'];
    for (let i = 0; i < 6; i++) {
        localStorage["wildPkmnBase" + statsArr[i]] = stats[i].base_stat;
        //console.log("wildPkmnBase" + statsArr[i]);
        //console.log(localStorage["wildPkmnBase" + statsArr[i]]);
        //console.log("Base " + statsArr[i] + " = " + stats[i].base_stat);
    }
    generateStats(idx);
}

function generateStats(idx) {
    let otherStats = ['Hp', 'Atk', 'Def', 'Spatk', 'Spdef', 'Speed'];
    let level = parseInt(localStorage.wildPkmnLevel);
    generateHp(level);
    for (let i = 1; i < 6; i++) {
        generateOther(level, otherStats[i]);
    }
    /*
    for (let i = 0; i < 6; i++) {
        console.log(localStorage["wildPkmn" + otherStats[i] + "Stat"]);
    }
    */
   assignStats(idx);
}

function generateHp(level) {
    let hp = parseInt(localStorage.wildPkmnBaseHp);
    let hpIV = parseInt(localStorage.wildPkmnHpIV);
    //console.log("Level: " + level);
    //console.log("HP Base: " + hp);
    //console.log("HP IV: " + hpIV);
    localStorage.wildPkmnHpStat = level + 10 + Math.floor((((2 * hp) + hpIV) * level) / 100);
    console.log("Hp: " + localStorage.wildPkmnHpStat);
}

function generateOther(level, stat) {
    let baseStat = parseInt(localStorage["wildPkmnBase" + stat]);
    let statIV = parseInt(localStorage["wildPkmn" + stat +"IV"]);
    console.log("wildPkmn" + stat + "Stat");
    localStorage["wildPkmn" + stat + "Stat"] = 5 + Math.floor((((2 * baseStat) + statIV) * level) / 100);
    console.log(stat + ": " + localStorage["wildPkmn" + stat + "Stat"]);
}

function assignStats(idx) {
    let arr = ['Hp', 'Atk', 'Def', 'Spatk', 'Spdef', 'Speed'];
    // Store Pokemon Stats
    console.log(localStorage.wildPkmnHpStat);
    for (let i = 0; i < 6; i++) {
        localStorage["pokemon" + idx + arr[i] + "Stat"] = localStorage["wildPkmn" + arr[i] + "Stat"];
    }
    
    for (let i = 0; i < 6; i++) {
        console.log("pokemon" + idx + arr[i] + "Stat: " + localStorage["pokemon" + idx + arr[i] + "Stat"]);
    }
}

function checkStats(pokemon) {
    document.getElementById("LEVEL").innerHTML = "Lvl: " + localStorage[pokemon + "Level"];
    document.getElementById("HP").innerHTML = "HP: " + localStorage[pokemon + "HP"];
    document.getElementById("ATK").innerHTML = "ATK: " + localStorage[pokemon + "ATK"];
    document.getElementById("DEF").innerHTML = "DEF: " + localStorage[pokemon + "DEF"];
    document.getElementById("SPATK").innerHTML = "SPATK: " + localStorage[pokemon + "SPATK"];
    document.getElementById("SPDEF").innerHTML = "SPDEF: " + localStorage[pokemon + "SPDEF"];
    document.getElementById("SPEED").innerHTML = "SPEED: " + localStorage[pokemon + "SPEED"];
}

function viewStorage() {
    for (let x = 1; x <= 500 && localStorage["pokemon" + x]; x++) {
        let str = "pokemon" + x;
        document.getElementById(str).src = "../pokesprite-master/pokemon-gen7x/regular/" + localStorage["pokemon" + x] + ".png";
    }
}