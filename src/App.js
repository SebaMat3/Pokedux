//src/App.js

import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col, Spin } from 'antd';
import { fetchPokemonsWithDetails, getFilteredPokemons } from './slices/dataSlice';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';

function App() {
  const pokemons = useSelector(getFilteredPokemons, shallowEqual);
  //const pokemons = useSelector((state) => state.data.pokemons, shallowEqual)

  const loading = useSelector((state) => state.ui.loading)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails())
  }, [dispatch]);


  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>

      { loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>)
        : (
        <PokemonList pokemons={pokemons}/>
      )}
  
    </div>

  );
}


export default App;
