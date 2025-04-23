//src/slices/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonDetails, getPokemons } from '../api';
import { setLoading } from './uiSlice';

const initialState = {
    pokemons: [],
    searchTerm: ''
}

// Thunks
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


// Slice
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload.toLowerCase();
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

// Actions
export const { setPokemons, setFavorite, setSearchTerm } = dataSlice.actions;

// Selectors
export const getFilteredPokemons = (state) => {
    const searchTerm = state.data.searchTerm;
    return state.data.pokemons.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm)
    );
};

// Reducer
export default dataSlice.reducer;