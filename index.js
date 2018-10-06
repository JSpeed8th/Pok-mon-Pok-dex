var mainScreen = document.getElementById('main_screen');
var secondScreen = document.getElementById('second_screen');
var pokeName = document.getElementById('name_of_pokemon');


var eevee = 133;
var jigglypuff = 39;
// 133 Eevee
// 49 JigglyPuff

$.ajax({url:'https://fizal.me/pokeapi/api/' + jigglypuff + '.json',
success: function(response) {
  console.log(response)
  console.log(response['sprites']['front_default'])
  changeName(response)
  pokePic(response)
  pokeStats(response)
  }
})



// -----------------------------POKE PIC FUNCTION-------------------------------

function pokePic(x) {
    mainScreen.style.backgroundImage = "url(" + x['sprites']['front_default'] + ")";
}


// ----------------------------POKE NAME FUNCTION-------------------------------

function changeName(x) {
  console.log(x.name)
  pokeName.innerHTML = x.name

}

// -----------------------------POKE PIC FUNCTION-------------------------------

function pokeStats(x){
  var stats = {
    height: x['height'],

  }
  console.log("Height: ." + stats['height'])
}

// ------------------------CREATE A POKEMON  CONSTRUCTOR------------------------

class Pokemon {
  constructor(nationalNumb) {
    this.nationalNumb = nationalNum;
    this.hp = x['stats'][5]['base_stat']
    this.attack = x['stats'][4]['base_stat']
    this.defence = x['stats'][3]['base_stat']
    this.abilities = x['abilities']
  }
};

// --------------------CREATE A POKEMON TRAINER CONSTRUCTOR---------------------

class Trainer{
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.pokedex = [];
  }
  addToPokedex(pokemonObject) {
    this.pokedex.push(pokemonObject)
  }
  all() {
    return this.pokedex
  }
}

// 1. Create a class for each pokemon instance.
// 2. Figure out if ajax should be included within the class or if it should be considered my pokedex.
// 3. Maybe pokemon has the info and the ajax calls it?
