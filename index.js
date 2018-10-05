var mainScreen = document.getElementById('main_screen');
var secondScreen = document.getElementById('second_screen');
var pokeName = document.getElementById('name_of_pokemon');


var eevee = 133;
var jigglypuff = 39;
// 133 Eevee
// 49 JigglyPuff

$.ajax({url:'https://fizal.me/pokeapi/api/' + eevee + '.json',
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
