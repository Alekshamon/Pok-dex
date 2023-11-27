const pokemonList = [ 
    {
        name: "Bulbasaur",
        imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "Mew",
    },
    ];

function PokemonCard () {

    const pokemon = pokemonList[1];

    return (
    <div>
      <figure>
      {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} className="Image" />
          ) : (
          <p>???</p>
          )}
      </figure>
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>
    </div>
  );
}


export default PokemonCard;