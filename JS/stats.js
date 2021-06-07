// GENERATE STATS

// Generate IV's
function generateIV() {
    localStorage.wildPkmnHpIV = Math.floor(Math.random() * 32);
    localStorage.wildPkmnAtkIV = Math.floor(Math.random() * 32);
    localStorage.wildPkmnDefIV = Math.floor(Math.random() * 32);
    localStorage.wildPkmnSpeedIV = Math.floor(Math.random() * 32);
    localStorage.wildPkmnSpatkIV = Math.floor(Math.random() * 32);
    localStorage.wildPkmnSpdefIV = Math.floor(Math.random() * 32);
}

// Obtain base stats from API
const getBaseStats = async (str) => {
    str = str.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${str}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    //console.log(pokemon.stats[0].base_stat);
    assignBaseStats(pokemon.stats);
}

// Assign base stats to localStorage
function assignBaseStats(stats) {
    let statsArr = ['Hp', 'Atk', 'Def', 'Spatk', 'Spdef', 'Speed'];
    for (let i = 0; i < 6; i++) {
        localStorage["wildPkmnBase" + statsArr[i]] = stats[i].base_stat;
        console.log("wildPkmnBase" + statsArr[i]);
        //console.log(localStorage["wildPkmnBase" + statsArr[i]]);
        //console.log("Base " + statsArr[i] + " = " + stats[i].base_stat);
    }
    generateHp();

}

function generateStats(idx) {

}

function generateHp() {
    let level = parseInt(localStorage.wildPkmnLevel);
    let hp = parseInt(localStorage.wildPkmnBaseHp);
    let hpIV = parseInt(localStorage.wildPkmnHpIV);
    console.log("Level: " + level);
    console.log("HP Base: " + hp);
    console.log("HP IV: " + hpIV);

    HpStat = parseInt(level) + 10 + Math.floor((((2 * hp) + hpIV) * level) / 100);
    console.log(HpStat);
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
        document.getElementById(str).src = "../Assets/" + localStorage["pokemon" + x] + ".png";
    }

}