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

const PokemonIdEvenDivBy3 = pokémon.filter((pokémon) => pokémon.id % 3 === 0).map((pokémon) => pokémon.id);
console.log(PokemonIdEvenDivBy3);

const fireTypes = pokémon.filter((pokémon) => pokémon.types == 'fire');
console.log(fireTypes);

const moreThan1Type = pokémon.filter((pokémon) => pokémon.types.length > 1);
console.log(moreThan1Type);

const pokemonNames = pokémon.map((pokémon) => pokémon.name);
console.log(pokemonNames);

const namesOfPokesG8erThan99 = pokémon.filter((pokémon) => pokémon.id > 99).map((pokémon) => pokémon.name);
console.log(namesOfPokesG8erThan99);

const poisonTypes = pokémon.filter((pokémon) => pokémon.types == 'poison').map((pokémon) => pokémon.name);
console.log(poisonTypes);

const flyingFirstPokemon = pokémon.filter((pokémon) => pokémon.types[1] == 'flying').map((pokémon) => pokémon.types[0]);
console.log(flyingFirstPokemon);

const normalCount = pokémon.filter((pokémon) => pokémon.types.includes("normal")).length;
console.log(normalCount);