//src/actions/index.js

import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const getPokemonWithDetails =
    (pokemons = []) =>
    async (dispatch) => {
        const pokemonsDetails = await Promise.all(
            pokemons.map((pokemon) => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonsDetails));
    }

