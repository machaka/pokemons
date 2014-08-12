/**
 * Created by roberto on 11/08/14.
 */
/*function Pokemon(nombre, vida, ataque)
{
    var estructuraPokemon =
    {
        nombre: nombre,
        vida: vida,
        ataque: ataque,
        datos: {
                tipo: "Tierra",
                debilidad: "Fuego"
        }
    };
    return estructuraPokemon;
}


console.log(Pokemon('Pikachu','100', '70'));
*/

function Pokemon(nombre, vida, ataque, defensa, grito)
{
    this.nombre  = nombre;
    this.vida    = vida;
    this.ataque  = ataque;
    this.grito   = grito
    this.defensa = defensa;
    this.gritar  = function ()
    {
        alert(this.grito);
    }
}

var pokemonUno = new Pokemon('pikachu', 100, 35, 85, 'Pika!');
var pokemonDos = new Pokemon('charmander', 100, 38, 80, 'Char!!!');

window.onload = function()
{


    var nombrePokemonUno = document.getElementById('pokemon-name-1');
    var ataquePokemonUno = document.getElementById('pokemon-ataque-1');
    var vidaPokemonUno = document.getElementById('pokemon-vida-1');

    document.getElementById('pokemon-image-1').src='static/img/' + pokemonUno.nombre + '.jpg';
    nombrePokemonUno.innerText = pokemonUno.nombre;
    ataquePokemonUno.innerText = pokemonUno.ataque;
    vidaPokemonUno.innerText   = pokemonUno.vida;


    var nombrePokemonDos = document.getElementById('pokemon-name-2');
    var ataquePokemonDos = document.getElementById('pokemon-ataque-2');
    var vidaPokemonDos = document.getElementById('pokemon-vida-2');
    var imagePokemonDos = document.getElementById('pokemon-image-2');
    document.getElementById('pokemon-image-2').src='static/img/' + pokemonDos.nombre + '.jpg';
    nombrePokemonDos.innerText = pokemonDos.nombre;
    ataquePokemonDos.innerText = pokemonDos.ataque;
    vidaPokemonDos.innerText   = pokemonDos.vida;
};

function batalla()
{
    var turno = 0;
    while(pokemonUno.vida > 0 || pokemonDos.vida > 0) {
        //Turno pokemon uno
        if (turno == 0) {
            pokemonDos.vida = pokemonDos.vida - pokemonUno.ataque;
            alert("Golpea " + pokemonUno.nombre );
            alert(pokemonDos.nombre + " le queda un total de vida de: " + pokemonDos.vida);
            turno = 1;
        } else {
            pokemonUno.vida = pokemonUno.vida - pokemonDos.ataque;
            alert("Golpea " + pokemonDos.nombre);
            alert(pokemonUno.nombre + " le queda un total de vida de: " + pokemonUno.vida);
            turno = 0;
        }

        if (pokemonUno.vida <= 0) {
            alert("!!!Gano:++ " + pokemonDos.nombre);
            document.getElementById('pokemon-player-1').style.display = 'none';
            break;
        } else if (pokemonDos.vida <= 0) {
            alert("!!!Gano " + pokemonUno.nombre);
            document.getElementById('pokemon-player-2').style.display = 'none';
            break;
        }
    }
}
