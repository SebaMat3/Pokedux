//src/App.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemons } from './api';
import { getPokemonWithDetails } from './actions/index';
import logo from './statics/logo.svg';
import './App.css';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemonsRes = await getPokemons();
        dispatch(getPokemonWithDetails(pokemonsRes));

      } catch (error) {
        // Handle the error appropriately here
        console.error('Error fetching Pokemon:', error);
        // Optionally set an error state
        //setError(error);
      }
    }
    fetchPokemons();

  }, []);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
        <PokemonList pokemons={pokemons}/>
    </div>

  );
}


export default App;
