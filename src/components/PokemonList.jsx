import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons = [] }) => {
    return (
        <div className="PokemonList">
            {pokemons?.map((pokemon, index) => {
                return (
                    <PokemonCard
                        key={`pokemon-${pokemon.name}`}
                        name = {pokemon.name}
                        image={pokemon.sprites?.front_default}
                        //{...pokemon}
                    />
                )
            })}
        </div>
    );
};

export default PokemonList;