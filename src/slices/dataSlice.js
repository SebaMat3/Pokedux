//src/slices/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonDetails, getPokemons } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        try {
            const pokemonsRes = await getPokemons();
            const pokemonsDetailed = await Promise.all(
                pokemonsRes.map((pokemon) => getPokemonDetails(pokemon))
            );
            dispatch(setPokemons(pokemonsDetailed));
            
            
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
        } finally {
            dispatch(setLoading(false));
        }
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setFavorite: (state, action) => {
            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                });
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].favorite;

                state.pokemons[currentPokemonIndex].favorite = !isFavorite;
            }

        }
    },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export default dataSlice.reducer;