//src/actions/index.js

import { getPokemonDetails } from "../api";
import { SET_POKEMONS, SET_LOADING, SET_FAVORITE } from "./types";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
})

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
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

