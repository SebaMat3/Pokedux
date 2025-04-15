import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons = [] }) => {
    return (
        <div className="PokemonList">
            {pokemons?.map((pokemon, index) => {
                return (
                    <PokemonCard
                        name = {pokemon.name}
                        key={`pokemon-${pokemon.name}`}
                        //{...pokemon}
                    />
                )
            })}
        </div>
    );
};

export default PokemonList;