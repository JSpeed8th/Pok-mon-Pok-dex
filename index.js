var mainScreen = document.getElementById('main_screen');
var secondScreen = document.getElementById('second_screen');
var pokeName = document.getElementById('name_of_pokemon');
var leftButton = document.getElementById('left')
var rightButton = document.getElementById('right')

var dynamicHeight = document.getElementById('height');
var dynamicHp = document.getElementById('hp');
var dynamicAttack = document.getElementById('attack');
var dynamicAbilities1 = document.getElementById('abilities1');
var dynamicAbilities2 = document.getElementById('abilities2');
var dynamicAbilities3 = document.getElementById('abilities3');

// -----------------------------EVENT LISTENERS---------------------------------

var clicks = 0;
rightButton.addEventListener('click', function() {
  leftButton.style.borderLeft = '5px solid black'
  if(clicks < jordansDeck.pokedex.length - 1) {
    clicks++
    ajaxCall()
  } else {
    clicks = 0;
    ajaxCall()
  }
})

leftButton.addEventListener('click', function() {
  if(clicks > jordansDeck.pokedex.length - 1) {
    clicks--
    ajaxCall()
  } else {
    clicks = 0;
    ajaxCall()
  }
})

// -----------------------------------END---------------------------------------


// --------------------------------AJAX CALL------------------------------------

function ajaxCall() {
    $.ajax({url:'https://fizal.me/pokeapi/api/' + jordansDeck.pokedex[clicks].nationalNumb + '.json',
    success: function(response) {
      console.log(response)
      changeName(response)
      pokePic(response)
      statAssignment(response)
      dynamicStats()
      console.log(jordansDeck.pokedex[clicks]['name'])
      console.log(jordansDeck.pokedex[clicks])
    }
  })
}

// -----------------------------POKE PIC FUNCTION-------------------------------

function pokePic(x) {
    mainScreen.style.backgroundImage = "url(" + x['sprites']['front_default'] + ")";

}


// ----------------------------POKE NAME FUNCTION-------------------------------

function changeName(x) {
  pokeName.innerHTML = x.name

}

// ---------------------FUNCTION ASSIGNING POKEMON STATS------------------------

function statAssignment(response) {
  jordansDeck.pokedex[clicks].name = response['name'];
  jordansDeck.pokedex[clicks].height = response['height'];
  jordansDeck.pokedex[clicks].hp = response['stats'][5]['base_stat'];
  jordansDeck.pokedex[clicks].attack = response['stats'][4]['base_stat'];
  jordansDeck.pokedex[clicks].abilities = response['abilities'];
}

// -------------------FUNCTION DYNAMICALLY CHANGING STATS-----------------------

function dynamicStats() {
  dynamicHeight.innerHTML = jordansDeck.pokedex[clicks].height
  dynamicHp.innerHTML = jordansDeck.pokedex[clicks].hp
  dynamicAttack.innerHTML = jordansDeck.pokedex[clicks].attack
  dynamicAbilities1.innerHTML = jordansDeck.pokedex[clicks].abilities [0]['ability']['name']
  dynamicAbilities2.innerHTML = jordansDeck.pokedex[clicks].abilities [1]['ability']['name']
  dynamicAbilities3.innerHTML = jordansDeck.pokedex[clicks].abilities [2]['ability']['name']
}

// ------------------------CREATE A POKEMON  CONSTRUCTOR------------------------

class Pokemon {
  constructor(nationalNumb) {
    this.nationalNumb = nationalNumb;
    this.name;
    this.height;
    this.hp;
    this.attack;
    this.abilities;
  }
};

var jigglypuff = new Pokemon(39)
var eevee = new Pokemon(133)
var psyduck = new Pokemon(54)

// --------------------CREATE A POKEMON TRAINER CONSTRUCTOR---------------------

class Trainer{
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.pokedex = [];
  }
  addToPokedex(pokemonObject) {
    this.pokedex.push(pokemonObject);
  }
  all() {
    return this.pokedex;
  }
  get(pokemon) {
    return pokemon;
  }
}

var jordansDeck = new Trainer ('Jordan', 'Speed')

jordansDeck.addToPokedex(jigglypuff)
jordansDeck.addToPokedex(eevee)
jordansDeck.addToPokedex(psyduck)

// 1. Create a class for each pokemon instance.
// 2. Figure out if ajax should be included within the class or if it should be considered my pokedex.
// 3. Maybe pokemon has the info and the ajax calls it?
