const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);
// ? a count of the number of pokémon that are "normal" type
const totalNormalPokemon = pokémon.filter((pokémon) => pokémon.types.includes('normal')).length;
console.log(totalNormalPokemon);
// output: 
// 4

// ? an array containing just the first type of all the pokémon whose second type is "flying"
const firstTypePokemon = pokémon.filter((pokémon) => pokémon.types[1] == 'flying').map((pokémon) => pokémon.types[0])
console.log(firstTypePokemon);
// output:
[ 'bug', 'normal', 'ice', 'electric', 'fire' ]
// ? an array with just the names of the pokémon whose only type is poison
const namePoisonPokemons = pokémon.filter((pokémon) => pokémon.types == 'poison').map((pokémon) => pokémon.name)
console.log(namePoisonPokemons);
// output:
[ 'Ekans', 'Arbok' ]

const pokémonIdGreaterThan99 = pokémon.filter((pokémon) => pokémon.id > 99).map((pokémon) => pokémon.name);
console.log(pokémonIdGreaterThan99);
[
    'Kangaskhan',
    'Mr. Mime',
    'Eevee',
    'Articuno',
    'Zapdos',
    'Moltres',
    'Dragonair'
]

// ? an array with just the names of the pokémo
const pokémonNames = pokémon.map((pokémon) => pokémon.name);
console.log(pokémonNames);
[
    'Bulbasaur',  'Charmeleon',
    'Blastoise',  'Butterfree',
    'Pidgey',     'Ekans',
    'Arbok',      'Pikachu',
    'Vulpix',     'Meowth',
    'Abra',       'Machamp',
    'Tentacool',  'Geodude',
    'Dewgong',    'Krabby',
    'Kangaskhan', 'Mr. Mime',
    'Eevee',      'Articuno',
    'Zapdos',     'Moltres',
    'Dragonair'
]

// ? an array of pokémon objects that have more than one type

const moreThanOneType = pokémon.filter((pokémon) => pokémon.types.length > 1)
console.log(moreThanOneType);
[
    { id: 1, name: 'Bulbasaur', types: [ 'poison', 'grass' ] },
    { id: 12, name: 'Butterfree', types: [ 'bug', 'flying' ] },
    { id: 16, name: 'Pidgey', types: [ 'normal', 'flying' ] },
    { id: 72, name: 'Tentacool', types: [ 'water', 'poison' ] },
    { id: 74, name: 'Geodude', types: [ 'rock', 'ground' ] },
    { id: 87, name: 'Dewgong', types: [ 'water', 'ice' ] },
    { id: 144, name: 'Articuno', types: [ 'ice', 'flying' ] },
    { id: 145, name: 'Zapdos', types: [ 'electric', 'flying' ] },
    { id: 146, name: 'Moltres', types: [ 'fire', 'flying' ] }
]

// ? an array of pokémon objects that are "fire" type

const fireTypePokemons = pokémon.filter((pokémon) => pokémon.types.includes('fire'));
console.log(fireTypePokemons);
[
    { id: 5, name: 'Charmeleon', types: [ 'fire' ] },
    { id: 37, name: 'Vulpix', types: [ 'fire' ] },
    { id: 146, name: 'Moltres', types: [ 'fire', 'flying' ] }
]

// ? an array of pokémon objects where the id is evenly divisible by 3
const evenPokemons = pokémon.filter( (pokémon) => pokémon.id % 3 === 0);
console.log(evenPokemons);

// output: 
// [
//     { id: 9, name: 'Blastoise', types: [ 'water' ] },
//     { id: 12, name: 'Butterfree', types: [ 'bug', 'flying' ] },
//     { id: 24, name: 'Arbok', types: [ 'poison' ] },
//     { id: 63, name: 'Abra', types: [ 'psychic' ] },
//     { id: 72, name: 'Tentacool', types: [ 'water', 'poison' ] },
//     { id: 87, name: 'Dewgong', types: [ 'water', 'ice' ] },
//     { id: 144, name: 'Articuno', types: [ 'ice', 'flying' ] }
// ]

const pokémon1 = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]); 
// ? can you explain why const bListPkmn = pokémon.filter( p => p.name[0] === "B" ); 
// ? works when it is not a array but a string.

// * it works bc you can select a specific part of a string through the same way as you would 
// an array. p is the object and name is its attribute.
// given that we can  also check the first letter like if it were an arrray
// it works p(pokemon object).name(existing attribute of pokemon objects)[0](first letter of the string) === (is it equal to) "B"(B?)
// if yes then add to list if not then dont 